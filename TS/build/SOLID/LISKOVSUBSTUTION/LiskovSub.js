/**
 * LSP: This principle states that, if S is a subtype of T, then objects of type T should be replaced with the objects of type S.
 *
 * In simple words we can say that, when we have a base class and child class relationships i.e. inheritance relationships,
 * then, if we can successfully replace the object/instance of a parent class with an object/instance of the child class,
 *  without affecting the behavior of the base class instance, then it is said to be in Liskov Substitution Principle
 * https://dotnettutorials.net/lesson/liskov-substitution-principle/
 *
 */
class SuperHero {
    fly() {
        return "I am a flying SuperHero";
    }
}
class SuperVillan {
    fly() {
        return "I am a flying SuperVillan";
    }
}
function client() {
    let superPerson = new SuperHero();
    //Liskov-Substution principle says that you should be able substitute SuperHero instance in Ln.19 with SuperVillan
    //and the console should work as is
    superPerson = new SuperVillan();
    console.log(superPerson.fly());
    const superPersons = [new SuperHero(), new SuperVillan()];
    superPersons.forEach((item) => console.log(item.fly()));
}
client();
