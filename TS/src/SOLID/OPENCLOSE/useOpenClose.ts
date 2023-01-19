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
