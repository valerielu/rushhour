class Car {
  constructor(length, color, startPos, orientation) {
    this.length = length;
    this.color = color;
    this.startPos = startPos;
    this.orientation = orientation;
    this.segments = [startPos];
    this.setUpBody();
  }


  directionTranslate() {
    let pos;
    switch (this.orientation) {
      case "down":
        pos = [1, 0];
        break;
      case "right":
        pos = [0, 1];
    }
    return pos;
  }

  setUpBody() {
    let oppositeOrientation = [this.directionTranslate()[0] * -1, this.directionTranslate()[1] * -1];
    for (let i = 0; i < this.length - 1 ; i++) {
      let bodyPart = [this.segments[i][0] + oppositeOrientation[0], this.segments[i][1] + oppositeOrientation[1]];
      this.segments.push(bodyPart);
    }

  }

  move(dir) {
    let oldHead, newHead;
    if (this.onEdge()) {
      alert("invalid move!");
    } else if (dir === this.directionTranslate()) {
      oldHead = this.segments[0];
      newHead = [oldHead[0] + dir[0], oldHead[1] + dir[1]];
      this.segments.unshift(newHead);
      this.segments.pop();
    } else if (dir[0] === this.directionTranslate()[0] * -1 && dir[1] === this.directionTranslate()[1] * -1) {
      oldHead = this.segments[this.length - 1];
      newHead = [oldHead[0] + dir[0], oldHead[1] + dir[1]];
      this.segments.push(newHead);
      this.segments.shift();
    } else {
      alert("invalid move!");
    }
  }

  onEdge() {
    if (this.directionTranslate() === [1, 0]) {
      return (this.segments[0][0] === 5 || this.segments[this.length - 1][0] === 0 );
    } else if (this.directionTranslate() === [0, 1]) {
      return (this.segments[0][1] === 5 || this.segments[this.length - 1][1] === 0 );
    }
  }

}

export default Car;
