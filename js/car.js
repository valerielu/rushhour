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
    for (let i = 0; i < this.length; i++) {
      let bodyPart = [this.startPos[0] + oppositeOrientation[0], this.startPos[1] + oppositeOrientation[1]];
      this.segments.push(bodyPart);
    }
  }

  move(dir) {
    let oldHead, newHead;
    if (dir === this.directionTranslate()) {
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
//check out of border;

}

export default Car;
