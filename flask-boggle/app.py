from flask import Flask, request, render_template, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle


app = Flask(__name__)
app.debug = True
app.config["SECRET_KEY"] = "rhk"


boggle_game = Boggle()
toolbar = DebugToolbarExtension(app)

@app.route("/")
def homepage():
    """shows the game board"""

    # saves the function make_board()n to board to use.
    board = boggle_game.make_board()

    # saves value of board to a key:board in session.
    session['board'] = board

    # sets key of high score to 0.
    highscore = session.get("highscore", 0)
    
    # sets key of number of plays to 0.
    nplays = session.get("nplays", 0)

    
    return render_template("index.html", board=board, highscore=highscore, nplays=nplays)


@app.route("/check-word")
def check_word():
    """Check if word is in dictionary."""

    # grabs the word
    word = request.args["word"]
    board = session["board"]
    # runs the function from boggle.py to check the word
    response = boggle_game.check_valid_word(board, word)

    # we need to jsonify since ajax request uses JSON.
    return jsonify({'result': response})


@app.route("/post-score", methods=["POST"])
def post_score():
    """Receive score, update nplays, update high score if appropriate."""

    #grabs the data.
    score = request.json["score"]
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    # updates the score in the session storage
    session['nplays'] = nplays + 1
    session['highscore'] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore)
