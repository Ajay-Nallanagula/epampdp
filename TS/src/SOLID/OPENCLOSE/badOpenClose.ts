/** OPEN CLOSE PRINCIPLE
 * “Software entities … should be open for extension, but closed for modification.”
 *
 * We used a third class called AreaCalculator to calculate the area of
 * the Rectangle and Circle classes. Imagine we would add another shape
 * later, which means we need to create a new class. In that case,
 *  we would also need to modify the AreaCalculator class to calculate
 * the area of the new class. That’s against the Open-Close Principle.
 */

class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class AreaCalculator {
  public calculateRectangleArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }

  public calculateCircleArea(circle: Circle): number {
    return Math.PI * (circle.radius * circle.radius);
  }
}

export default AreaCalculator;
