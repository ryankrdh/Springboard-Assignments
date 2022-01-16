from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.config['SECRET_KEY'] = "rhk"
debug = DebugToolbarExtension(app)

@app.route("/")
def ask_questions():
    """This will generate and show form to ask words."""

    # grabs the stories from story class in stories.py
    prompts = story.prompts

    # adding prompts as keyword arguments as propmts.
    return render_template("questions.html", prompts=prompts)

@app.route("/story")
def show_story():
    """Show story result"""

    # .generate is from story class from stories.py
    text = story.generate(request.args)

    return render_template("story.html", text=text)