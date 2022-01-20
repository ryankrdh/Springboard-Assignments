from flask import Flask, request, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "rhk"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

# all_question = [ item.question for item in satisfaction_survey.questions]

responses = []

@app.route("/")
def home_page():
    """Shows the home page."""

    return render_template("survey_home.html", survey=satisfaction_survey)

@app.route("/questions/0", methods=["POST"])
def show_question():
    """Displays the questions"""
    all_question = [ item.question for item in satisfaction_survey.questions ]
    # QUESTION: difference between using render_template vs redirect?
    return render_template("question0.html", question=all_question, survey=satisfaction_survey)