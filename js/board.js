import Car from "./car.js";

class Board {
  constructor(cars) {
    this.grid = new Array(6).fill(new Array(6));
    this.cars = cars;
    this.selectedCar;
  }


  setUpCars() {
    this.cars.forEach(car => {
      car.segments.forEach(square => {
        // $(`li[data-pos=[${square[0]}, ${square[1]}]`).addClass(car.color);
        let $square = $(`li`).eq(square[0] * this.grid.length + square[1]);
        $square.addClass(car.color);
        $square.addClass("car");
        $square.click(() => {
          $('.selected').removeClass("selected");
          $(`.${car.color}`).addClass("selected");
          this.selectedCar = car;
        });
      });
    });
  }


  isWon() {
    if (this.cars[0].segments[0][1] === 5) {
      //if the red car's head is on the right edge
      return true;
    }
    return false;
  }


}

export default Board;
