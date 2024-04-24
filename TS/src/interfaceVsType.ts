interface Cat{meows:()=>string}
interface Dog{barks:()=>string}

type Animal = Cat |Dog

let animal: Animal = {
    meows:() =>'meow',
    barks:()=>'bow'
}

//Error: A class can only implement an object type or intersection of object types with statically known members.
class Animal2 implements Animal{

}


interface Person {
    getPermission: () => string;
}
//Error Interface 'Staff' incorrectly extends interface 'Person'.
//The types returned by 'getPermission()' are incompatible between these types.
//Type 'string[]' is not assignable to type 'string'.
  interface Staff extends Person {
     getPermission: () => string[];
  }

type PersonT = {
    getPermission: () => string;
}

//VALID CODE
type PersonT2 = PersonT & {
    getPermission: () => string[]
}

type T0 = string | number | undefined
//type T0 = string | number

let to:NonNullable<T0>;
to=null

















