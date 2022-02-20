class BoggleGame {
  constructor(boardId, secs = 60) {
    this.secs = secs;
    this.showTimer();

    this.score = 0;
    this.words = new Set();
    // QUESTION: I don't get why we are using jquery here. is it to connect this to the html?
    this.board = $('#' + boardId);

    // every 1000 msec, "tick"
    this.timer = setInterval(this.tick.bind(this), 1000);

    // QUESTION: Why are we selecting this.board for this jquery?
    $('.add-word', this.board).on('submit', this.handleSubmit.bind(this));
  }

  showTimer() {
    $('.timer', this.board).text(this.secs);
  }

  async handleSubmit(evt) {
    // QUESTION: I understand that preventDefault prevents the default actions of a website. But what does it actually do??
    evt.preventDefault();
    // QUESTION: does this mean select the word, if this.board exists?
    const $word = $('.word', this.board);

    let word = $word.val();
    if (!word) return;
  }
}
