//Start Problem Statement
/*
In this below code, the Switch class directly depends on the LightBulb class. 
If we ever wanted to change or extend the behavior of the Switch,
 we'd have to modify the Switch class directly, leading to rigid and inflexible code.
*/
class LightBulb {
  turnOn() {
    // Implementation for turning on the light bulb
  }

  turnOff() {
    // Implementation for turning off the light bulb
  }
}

class Switch {
  private bulb: LightBulb;

  constructor() {
    this.bulb = new LightBulb();
  }

  operate() {
    // Operate the switch to turn the light on or off
    this.bulb.turnOn();
  }
}

//End Problem Statement
interface ISwitchable {
    turnOn(): void;
    turnOff(): void;
  }
  
  class LightBulb1 implements ISwitchable {
    turnOn() {
      // Implementation for turning on the light bulb
    }
  
    turnOff() {
      // Implementation for turning off the light bulb
    }
  }
  
  class Switch1 {
    private device: ISwitchable;
  
    constructor(device: ISwitchable) {
      this.device = device;
    }
  
    operate() {
      // Operate the switch to turn the device on or off
      this.device.turnOn();
    }
  }


//Solution Start

//End Solution
