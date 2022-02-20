from flask import Flask, request, render_template, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

boggle_game = Boggle()

app = Flask(__name__)
app.debug = True
app.config["SECRET_KEY"] = "rhk"

toolbar = DebugToolbarExtension(app)

boggle_game = Boggle()

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