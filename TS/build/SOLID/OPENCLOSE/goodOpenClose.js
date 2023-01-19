export class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calculateArea() {
        console.log(`Area of Rectangle: ${this.width * this.length}`);
    }
}
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        const PI = 3.14;
        console.log(`Area of Circle: ${PI * Math.pow(this.radius, 2)}`);
    }
}
export class Triangle {
    constructor(breadth, height) {
        this.breadth = breadth;
        this.height = height;
    }
    calculateArea() {
        console.log("Area of Triangle:" + (1 / 2) * this.breadth * this.height);
    }
}
class AreaCalculator {
    calculateArea(shape) {
        shape.calculateArea();
    }
}
export default AreaCalculator;
