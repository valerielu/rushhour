class View {
  constructor(board, $container) {
    this.$container = $container;
    this.board = board;
    this.originalCars = this.board.cars;
    this.render();
    $(window).on("keydown", (event) => {
      if (this.board.selectedCar) {
        if (event.keyCode === 38) {
          event.preventDefault();
          this.board.selectedCar.move("up");
          this.render();
        } else if (event.keyCode === 40) {
          event.preventDefault();
          this.board.selectedCar.move("down");
          this.render();
        } else if (event.keyCode === 37) {
          event.preventDefault();
          this.board.selectedCar.move("left");
          this.render();
        } else if (event.keyCode === 39) {
          event.preventDefault();
          this.board.selectedCar.move("right");
          this.render();
          if (this.board.selectedCar.color === "red" && this.board.isWon()) {
            $(window).off("keydown");
            alert("You won!");
          }
        }
      }
    });
  }

  setUpBoard() {
    for (let i = 0; i < this.board.grid.length; i++) {
      let $row = $("<ul>");
      for (let j = 0; j < this.board.grid.length; j++) {
        let $square = $("<li>");
        $square.data("pos", [i, j]);
        $row.append($square);
      }
      $row.data("row", i);
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
