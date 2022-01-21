from os import supports_bytes_environ
from flask import Flask, request, render_template, redirect, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

# QUESTION: can I get an explanation to RESPONSES_KEY = "responses". why cant we just use responses = []
# key names will use to store some things in the session;
# put here as constants so we're guaranteed to be consistent in
# our spelling of these
RESPONSES_KEY = "responses"


app = Flask(__name__)
app.config['SECRET_KEY'] = "rhk"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

# all_question = [ item.question for item in satisfaction_survey.questions]

@app.route("/")
def home_page():
    """Shows the home page."""

    return render_template("survey_home.html", survey=satisfaction_survey)

@app.route("/start", methods=["POST"])
def start_survey():
    """clears the session and starts the survey"""

    # QUESTION: flask session is used to store temporary information. for permanent data, use a database. 
    # So what's the difference between using an empty list vs session. Is it just for non sens. data like user logged in or not?
    # QUESTION: When using get or post methods, do we need to use redirect?
    session[RESPONSES_KEY] = []

    return redirect("/questions/0")

@app.route("/questions/0", methods=["POST"])
def show_question0():
    """Displays the questions"""
    all_question = [ item.question for item in satisfaction_survey.questions ]

    


    # QUESTION: difference between using render_template vs redirect?
    return render_template("question0.html", question=all_question, survey=satisfaction_survey)

@app.route("/questions/1", methods=["POST"])
def show_question1():
    """Displays the questions"""
    all_question = [ item.question for item in satisfaction_survey.questions ]
    # QUESTION: difference between using render_template vs redirect?
    return render_template("question1.html", question=all_question, survey=satisfaction_survey)

# QUESTION: why is it methods in python file and method in html?
@app.route("/answer", methods=["POST"])
def save_response():
    """Saves responses and continues on to next question"""
    all_question = [ item.question for item in satisfaction_survey.questions ]
    # grabs the user response
    choice = request.form["answer"]
    responses.append(choice)
    return redirect(f"/questions/1")
    # if (len(responses) == len(satisfaction_survey.questions)):
