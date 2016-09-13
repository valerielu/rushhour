import Car from "./car.js";
import Board from "./board.js";
import View from "./view.js";

$(() => {
  let $container = $('#rush-hour');
  let cars = [new Car(2, "red", [2, 1], "right"), new Car(3, "yellow", [2, 4], "down"),
  new Car(2, "green", [5, 1], "down"), new Car(2, "orange", [5, 3], "right"), new Car(2, "blue", [5, 5], "right")];
  window.cars = cars;
  let board = new Board(cars);
  let view = new View(board, $container);
});
