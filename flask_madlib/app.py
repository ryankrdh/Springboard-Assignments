from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.config['SECRET_KEY'] = "rhk"
debug = DebugToolbarExtension(app)

@app.route("/")
def ask_questions():
    """This will generate and show form to ask words."""

    prompts = story.prompts

