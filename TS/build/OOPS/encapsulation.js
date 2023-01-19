class NOENCAP_Person {
}
const mario = new NOENCAP_Person();
mario.health = -3; // this doesn't make any sense
mario.speed = 1;
// To ensure more granular level of protection , its called encapsulation
class ENCAP_Person {
    get health() {
        return this._health;
    }
    set health(value) {
        console.log('Ajay');
        if (value < 0) {
            throw new Error("health cannot be a negative value");
        }
        this._health = value;
    }
    get speed() {
        return this._speed;
    }
    set speed(val) {
        this._speed = val;
    }
}
const lugie = new ENCAP_Person();
lugie.health = -9;
console.log(lugie.health);
lugie.speed = 100;
console.log(lugie.speed);
