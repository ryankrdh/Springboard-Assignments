from flask import Flask, request, render_template, session, jsonify
from boggle import Boggle

boggle_game = Boggle()

app = Flask(__name__)
app.config["SECRET_KEY"] = "rhk"

boggle_game = Boggle()

@app.route("/")
def homepage():
    """shows the game board"""

    # saves the function make_board()n to board to use.
    board = boggle_game.make_board()

    # saves value of board to a key:board in session.
    session['board'] = board

    # 
    highscore = session.get("highscore", 0)