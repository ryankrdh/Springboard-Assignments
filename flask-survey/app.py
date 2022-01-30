# from os import supports_bytes_environ
from flask import Flask, request, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

# "responses" is a field on session object. (its the key of the response)
# key names will use to store some things in the session;
# put here as constants so we're guaranteed to be consistent in
# our spelling of these
RESPONSES_KEY = "responses"

app = Flask(__name__)
app.config['SECRET_KEY'] = "rhk"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route("/")
def home_page():
    """Shows the home page."""

    return render_template("survey_home.html", survey=satisfaction_survey)

@app.route("/start", methods=["POST"])
def start_survey():
    """clears the session and starts the survey"""

    # Q: flask session is used to store temporary information. for permanent data, use a database. 
    # empty list will only exist during the duration of the function
    session[RESPONSES_KEY] = []

    return redirect("/questions/0")

# @app.route("/questions/0")
# def show_question0():
#     """Displays the questions"""
#     all_question = [ item.question for item in satisfaction_survey.questions ]


# render_template instead of redirect will needlessly run codes you already ran.

# QUESTION: I need explanation for <int:qid> I understand that it is used to pass the number after /questions/. Also why not use f string?
# QUESTION: How come we aren't using methods=["GET"]
@app.route("/questions/<int:qid>")
def show_question(qid):
    """Display current question."""
    responses = session.get(RESPONSES_KEY)

    # QUESTION: This doesn't seem to work, is it needed? it loads the if (len(responses) != qid) instead.
    # if (responses is None):
    #     # redirects the user to home page if pt tries to jump to questions too soon
    #     return redirect("/")
    
    if (len(responses) == len(satisfaction_survey.questions)):
        # if the user has answered all questions. Go to completed page
        return redirect("/complete")
    
    if (len(responses) != qid):
        # Trying to access questions out of order. 'error' is flash category.
        flash(f"You were trying to jump to question {qid}.", 'ERROR')
        return redirect(f"/questions/{len(responses)}")

    # html will access questions by using question
    question = satisfaction_survey.questions[qid]
    return render_template("question0.html", question=question, survey=satisfaction_survey)

@app.route("/complete")
def complete():
    """Survey complete. Show completion page."""

    return render_template("complete.html")


@app.route("/answer", methods=["POST"])
def save_response():
    """Saves responses and continues on to next question"""
    
    # grabs the user response
    # QUESTION: request.form vs request.get
    choice = request.form["answer"]

    # add this response choice
    # QUESTION: I need help understanding better. so session[RESPONSES_KEY] is a temp data storage with variable with responses. and we are appending the user's choice in responses. After that we are saving the variable with the saved response back in the session[RESPONSES_KEY] data?
    responses = session[RESPONSES_KEY]
    responses.append(choice)
    session[RESPONSES_KEY] = responses
    
    if (len(responses) == len(satisfaction_survey.questions)):
        # The user has answered all the questions.
        return redirect("/complete")
    else:
        return redirect(f"/questions/{len(responses)}")
