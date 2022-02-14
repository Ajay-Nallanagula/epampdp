//Note : For ES6 module/imports to work in node we need to include "type":"module" in package.json.
//By default for node application this will be CommonJs

import Person from "./Person.js";

const person = new Person('Ajay','Nallanagula')
person.greet()