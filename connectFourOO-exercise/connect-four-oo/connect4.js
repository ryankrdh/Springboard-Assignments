// **** EXERCISE *****

// Part One: Make Game Into a Class
// Right now, our Connect Four is a bunch of disconnected functions and a few global variables.

// This can make it hard to see how things work, and would make it hard to restart a game (quick—which variables would you have to reset to start a game?)

// Let’s move this to being a class.

// Initially, we’ll start with one class, Game. The players will still just be numbers for player #1 and #2.

// What are the instance variables you’ll need on the Game?
// for example: height, width, and the board will move from global variables to instance attributes on the class. What else should move?
// Make a constructor that sets default values for these
// Move the current functions onto the class as methods
// This will require mildly rewriting some of these to change how you access variables and call other methods
// You should end up with all of the code being in the Game class, with the only other code being a single line at the bottom:

// new Game(6, 7);   // assuming constructor takes height, width
// Part Two: Small Improvements
// Make it so that you have a button to “start the game” — it should only start the game when this is clicked, and you should be able to click this to restart a new game.

// Add a property for when the game is over, and make it so that you can’t continue to make moves after the game has ended.

// Part Three: Make Player a Class
// Right now, the players are just numbers, and we have hard-coded player numbers and colors in the CSS.

// Make it so that there is a Player class. It should have a constructor that takes a string color name (eg, “orange” or “#ff3366”) and store that on the player instance.

// The Game should keep track of the current player object, not the current player number.

// Update the code so that the player pieces are the right color for them, rather than being hardcoded in CSS as red or blue.

// Add a small form to the HTML that lets you enter the colors for the players, so that when you start a new game, it uses these player colors.

// Further Study
// If you have more time and would like more tasks, here are some things to play with:

// Make it so that you can have more than two players
// The look-and-feel is very sparse: add animations, better graphics for the board or pieces, and other CSS ideas. You could even use bootstrap for things like modals for the start-new-game form.
// Make a very simple computer player: it could pick a random column and place a piece there. Can you do this in an object-oriented way, so there is a ComputerPlayer class?

/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

// const WIDTH = 7;
// const HEIGHT = 6;

// let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

class Game {
  constructor(player1, player2, HEIGHT = 6, WIDTH = 7) {
    this.player1 = player1;
    this.player2 = player2;
    this.HEIGHT = HEIGHT;
    this.WIDTH = WIDTH;
    this.currPlayer = 1;
    this.makeBoard();
    this.makeHtmlBoard();
    this.gameOver = false;
  }

  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.HEIGHT; y++) {
      this.board.push(Array.from({ length: this.WIDTH }));
    }
  }
}

/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  for (let y = 0; y < HEIGHT; y++) {
    board.push(Array.from({ length: WIDTH }));
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  const board = document.getElementById('board');

  // make column tops (clickable area for adding a piece to that column)
  const top = document.createElement('tr');
  top.setAttribute('id', 'column-top');
  top.addEventListener('click', handleClick);

  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement('td');
    headCell.setAttribute('id', x);
    top.append(headCell);
  }

  board.append(top);

  // make main part of board
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement('tr');

    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement('td');
      cell.setAttribute('id', `${y}-${x}`);
      row.append(cell);
    }

    board.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  const piece = document.createElement('div');
  piece.classList.add('piece');
  piece.classList.add(`p${currPlayer}`);
  piece.style.top = -50 * (y + 2);

  const spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
}

/** endGame: announce game end */

function endGame(msg) {
  alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (this.checkForWin()) {
    this.gameOver = true;
    return this.endGame(`Player ${this.currPlayer} won!`);
  }

  // check for tie
  if (board.every((row) => row.every((cell) => cell))) {
    return endGame('Tie!');
  }

  // switch players
  currPlayer = currPlayer === 1 ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // get "check list" of 4 cells (starting here) for each of the different
      // ways to win
      const horiz = [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ];
      const vert = [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ];
      const diagDR = [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 2],
        [y + 3, x + 3],
      ];
      const diagDL = [
        [y, x],
        [y + 1, x - 1],
        [y + 2, x - 2],
        [y + 3, x - 3],
      ];

      // find winner (only checking each win-possibility as needed)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

document.querySelector('#startButton').addEventListener('click', () => {
  console.log('hello');
});

// makeBoard();
// makeHtmlBoard();
