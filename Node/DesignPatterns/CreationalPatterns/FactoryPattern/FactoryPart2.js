class ValidatorFactory {
    createValidator(type){
        switch(type) {
            case 'login':
                return new LoginValidator();
            case 'registration':
                return new RegistrationValidator();
            default:
                throw new Error('Invalid type');
        }
    }
}

class Validator {
    validate(){};
}

class LoginValidator extends Validator {
    validate(){
        console.log('Validate login form');
    }
}

class RegistrationValidator extends Validator {
    validate(){
        console.log('Validate registration form');
    }
}

//Client code , Client is unaware of LoginValidator class or RegistrationValidator class
const factory = new ValidatorFactory();

const validator = factory.createValidator('login'); // creates LoginValidator
validator.validate();  // prints "Validate login form"

const validator1 = factory.createValidator('registration'); // creates RegistrationValidator
validator1.validate();  // prints "Validate registration form"

/*
Decouples the client code from the concrete classes: The client code does not need to know about the concrete class, only about the abstract type. If there's any change in the implementation or if the concrete classes change, the client code is unaffected as long as the interface stays the same.

Code is more flexible and scalable: If you want to add more types, you just need to add the corresponding class and handle the case in the factory method. This makes the code more scalable.

Simplifies object creation and reduces complexity: The Factory Pattern encapsulates the object creation process and hides the logic of creating and initializing complex objects from the client code, making the system easier to understand and maintain.

Avoids code duplication: Since the object creation process is centralized in a single method or class, there is no need to duplicate code when creating multiple instances or creating similar types of objects.

It can encapsulate and localize specific features and behavior: If an object requires intricate initial setup or accessor methods, the factory can provide a better interface for working with it.

Overall, the factory pattern promotes loose coupling, abstraction, and separation of responsibilities, which are core principles of good programming and design. By using factory patterns, you can help to increase the long-term maintainability and scalability of your JavaScript code.

*/