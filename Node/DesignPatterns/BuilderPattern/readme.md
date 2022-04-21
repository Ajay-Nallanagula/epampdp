Usecases:

https://stackoverflow.com/questions/328496/when-would-you-use-the-builder-pattern

See the below ctor.
Pizza(int size) { ... }  
Pizza(int size, boolean cheese) { ... }  
Pizza(int size, boolean cheese, boolean pepperoni) { ... }  
Pizza(int size, boolean cheese, boolean pepperoni, boolean bacon) { ... }
This is called the Telescoping Constructor Pattern. The problem with this pattern is that once constructors are 4 or 5 parameters long it becomes difficult to remember the required order of the parameters as well as what particular constructor you might want in a given situation.

One alternative you have to the Telescoping Constructor Pattern is the JavaBean Pattern where you call a constructor with the mandatory parameters and then call any optional setters after:
Pizza pizza = new Pizza(12);
pizza.setCheese(true);
pizza.setPepperoni(true);
pizza.setBacon(true);

The best fix is using Builder Pattern.

Real life example:
Swiggy Order Burger,
It will ask you the toppings/sides
--> Extra Cheese Slice
--> Soft drink
--> Chips
--> Egg Puff
...... These can be fullfilled with builder pattern
