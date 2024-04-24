import Shape from "./Shape";
import AreaCalculator, {
  Rectangle,
  Circle,
  Triangle,
} from "./goodOpenClose.js";

const circle: Circle = new Circle(10);
const rectangle: Rectangle = new Rectangle(10, 20);
const triangle: Triangle = new Triangle(10, 5);

const areaCalc = new AreaCalculator();
areaCalc.calculateArea(circle);
areaCalc.calculateArea(rectangle);
areaCalc.calculateArea(triangle);


//LISKOV PRINCIPLE: This principle states that, if S is a subtype of T, then objects of type T should be replaced with the objects of type S.
const shapesArray: Shape[] = [circle, rectangle, triangle];
for (let index = 0; index < shapesArray.length; index++) {
  areaCalc.calculateArea(shapesArray[index]);
}
