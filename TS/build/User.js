class User {
    set firstname(firstname) {
        this._firstname = firstname;
    }
    set lastname(lastname) {
        this._lastname = lastname;
    }
    get fullname() {
        return `${this._firstname} ${this._lastname}`;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    validateEmail(userMail) {
        return userMail === this.email;
    }
}
const user1 = new User();
user1.email = "abc@gmail.com";
user1.firstname = "Ajay";
user1.lastname = "Kumar";
console.log(user1.fullname);
console.log("isEmailValid: " + user1.validateEmail("pqr@email.com"));
