/**
 * LSP: This principle states that, if S is a subtype of T, then objects of type T should be replaced with the objects of type S.
 *
 * In simple words we can say that, when we have a base class and child class relationships i.e. inheritance relationships,
 * then, if we can successfully replace the object/instance of a parent class with an object/instance of the child class,
 *  without affecting the behavior of the base class instance, then it is said to be in Liskov Substitution Principle
 * https://dotnettutorials.net/lesson/liskov-substitution-principle/
 *
 */

interface ISuperPerson {
  fly(): string;
}

class SuperHero implements ISuperPerson {
  fly(): string {
    return "I am a flying SuperHero";
  }
}

class SuperVillan implements ISuperPerson {
  fly(): string {
    return "I am a flying SuperVillan";
  }
}

function client(): void {
  let superPerson: ISuperPerson = new SuperHero();
  //Liskov-Substution principle says that you should be able substitute SuperHero instance in Ln.19 with SuperVillan
  //and the console should work as is
  superPerson = new SuperVillan();

  console.log(superPerson.fly());

  const superPersons: ISuperPerson[] = [new SuperHero(), new SuperVillan()];
  superPersons.forEach((item) => console.log(item.fly()));
}

client();
