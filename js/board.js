import Car from "./car.js";

class Board {
  constructor(cars) {
    this.grid = new Array(6).fill(new Array(6));
    this.cars = cars;
  }

  setUpCars() {
    this.cars.forEach(car => {
      car.segments.forEach(square => {
        console.log(car.color);
        console.log(car.length);
        // $(`li[data-pos=[${square[0]}, ${square[1]}]`).addClass(car.color);
        let $square = $(`li`).eq(square[0] * this.grid.length + square[1]);
        $square.addClass(car.color);
        $square.addClass("car");
      });
    });
  }


  isWon() {

  }



}

export default Board;
