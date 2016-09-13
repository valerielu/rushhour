class View {
  constructor(board, $container) {
    this.$container = $container;
    this.board = board;
    this.render();
    $(window).on("keydown", (event) => {

      event.preventDefault();
      if (event.keyCode === 38) {
        this.board.snake.turn("N");
      } else if (event.keyCode === 40) {
        this.board.snake.turn("S");
      } else if (event.keyCode === 37) {
        this.board.snake.turn("W");
      } else if (event.keyCode === 39) {
        this.board.snake.turn("E");
      } else if (event.keyCode === 32) {
        location.reload();
      }
    });
  }

  setUpBoard() {
    for (let i = 0; i < this.board.grid.length; i++) {
      let $row = $("<ul>");
      for (let j = 0; j < this.board.grid.length; j++) {
        let $square = $("<li>");
        $square.attr = ("data-pos", [i, j]);
        $row.append($square);
      }
      $row.data = ("row", i);
      this.$container.append($row);
    }


  }

  render() {
    this.$container.empty();
    this.setUpBoard();
    this.board.setUpCars();

  }
}

export default View;
