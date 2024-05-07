
import { ISink, SinkConfig, SinkType } from "./models";

class SinkFactory {
    private creators: { [key: string]: new () => ISink } = {};
  
    register(sinkType: string, creator: new () => ISink) {
      this.creators[sinkType] = creator;
    }
  
    create(sinkType: string): ISink {
      const Creator = this.creators[sinkType];
      if (Creator) {
        return new Creator();
      } else {
        throw new Error("Invalid sink type");
      }
    }
  }

  export default new SinkFactory()