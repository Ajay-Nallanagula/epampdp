import AreaCalculator, { Rectangle, Circle, Triangle, } from "./goodOpenClose.js";
const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);
const triangle = new Triangle(10, 5);
const areaCalc = new AreaCalculator();
areaCalc.calculateArea(circle);
areaCalc.calculateArea(rectangle);
areaCalc.calculateArea(triangle);
//LISKOV PRINCIPLE
const shapesArray = [circle, rectangle, triangle];
for (let index = 0; index < shapesArray.length; index++) {
    areaCalc.calculateArea(shapesArray[index]);
}
