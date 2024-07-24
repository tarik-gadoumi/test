type Direction = "N" | "E" | "S" | "W";

const directions: Direction[] = ["N", "E", "S", "W"];

export class Tondeuse {
  x: number;
  y: number;
  direction: Direction;
  maxX: number;
  maxY: number;

  constructor(
    x: number,
    y: number,
    direction: Direction,
    maxX: number,
    maxY: number
  ) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  rotateLeft() {
    const currentIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentIndex + 3) % 4];
  }

  rotateRight() {
    const currentIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentIndex + 1) % 4];
  }

  moveForward() {
    switch (this.direction) {
      case "N":
        this.y = Math.min(this.y + 1, this.maxY);
        break;
      case "E":
        this.x = Math.min(this.x + 1, this.maxX);
        break;
      case "S":
        this.y = Math.max(this.y - 1, 0);
        break;
      case "W":
        this.x = Math.max(this.x - 1, 0);
        break;
    }
  }

  processInstructions(instructions: string) {
    for (const instruction of instructions) {
      if (instruction === "L") {
        this.rotateLeft();
      } else if (instruction === "R") {
        this.rotateRight();
      } else if (instruction === "F") {
        this.moveForward();
      }
    }
  }

  getPosition() {
    return `[${this.x}, ${this.y}] orientation ${this.direction}`;
  }
}
