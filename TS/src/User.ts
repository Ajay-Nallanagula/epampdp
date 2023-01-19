class User {
  private _firstname: string;
  private _lastname: string;
  private _email: string;

  set firstname(firstname: string) {
    this._firstname = firstname;
  }

  set lastname(lastname: string) {
    this._lastname = lastname;
  }

  get fullname() {
    return `${this._firstname} ${this._lastname}`;
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  validateEmail(userMail: string): boolean {
    return userMail === this.email;
  }
}

const user1 = new User();
user1.email = "abc@gmail.com";
user1.firstname = "Ajay";
user1.lastname = "Kumar";

console.log(user1.fullname);
console.log("isEmailValid: " + user1.validateEmail("pqr@email.com"));
