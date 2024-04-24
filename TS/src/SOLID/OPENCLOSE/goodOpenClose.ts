/** OPEN CLOSE PRINCIPLE
 * “Software entities … should be open for extension, but closed for modification.”
 */

/*
interface Shape {
  calculateArea(): void;
}

export default Shape;
*/

import Shape from "./Shape.js";

export class Rectangle implements Shape {
  width: number;
  length: number;
  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  calculateArea(): void {
    console.log(`Area of Rectangle: ${this.width * this.length}`);
  }
}

export class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): void {
    const PI = 3.14;
    console.log(`Area of Circle: ${PI * Math.pow(this.radius, 2)}`);
  }
}

export class Triangle implements Shape {
  breadth: number;
  height: number;
  constructor(breadth, height) {
    this.breadth = breadth;
    this.height = height;
  }

  calculateArea() {
    console.log("Area of Triangle:" + (1 / 2) * this.breadth * this.height);
  }
}

class AreaCalculator {
  calculateArea(shape: Shape) {
    shape.calculateArea();
  }
}

export default AreaCalculator;
