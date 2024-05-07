import fs, { PathOrFileDescriptor } from "fs";
import { ISink, SinkConfig, SinkType } from "./models";


class ConsoleSink implements ISink {
  sendLog(sink: SinkConfig, errorMessage: string): boolean {
    console.error(errorMessage);
    return true;
  }
}

class FileSink implements ISink {
  sendLog(sink: SinkConfig, errorMessage: string): boolean {
    if (!sink.sinkPath) {
      return false;
    }

    fs.appendFileSync(sink.sinkPath, errorMessage);
    return true;
  }
}

/*function SinkFactory(sinkType: SinkConfig): ISink {
  switch (sinkType.sink) {
    case SinkType.Console: {
      return new ConsoleSink();
    }

    case SinkType.File: {
      return new FileSink();
    }

    default: {
      return {} as ISink;
    }
  }
}*/

// function sinkFactory<T extends ISink>(Ctor: new () => T): T {
//   return new Ctor();
// }
//usage
//const sink = sinkFactory<FileSink>(FileSink)

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

const CATEGORY = {
  error: 0,
  warn: 1,
  debug: 2,
  trace: 3,
  info: 4,
};

type CategoryKeyType = keyof typeof CATEGORY;


/*
Work out on Dependency Injection Containers , with Typescript
npm install inversify reflect-metadata
Other Injectors: inversify , awilix , and typeDI 

*/


class Logger {
  constructor(
    private sinkConfig: SinkConfig,
    private categoryKey: CategoryKeyType = "info",
  ) {
    this.categoryKey = categoryKey;
    this.sinkConfig = sinkConfig;
    //this.sinkFactory = sinkFactory;
  }

  log(categoryKey: CategoryKeyType, data: any): boolean {
    let logMessage: string = "";
    if (CATEGORY[categoryKey] <= CATEGORY[this.categoryKey]) {
      const timeStamp: string = new Date().toISOString();
      const dataStr: string = JSON.stringify(data);
      logMessage = `${timeStamp}-${categoryKey}-${dataStr}`;
    }
   // const sinkObj = this.sinkFactory.create(this.sinkConfig.sink);
    //return sinkObj.sendLog(this.sinkConfig, logMessage);
  }

  error(data: any) {
    this.log("error", data);
  }

  warn(data: any) {
    this.log("warn", data);
  }

  info(data: any) {
    this.log("info", data);
  }

  debug(data: any) {
    this.log("debug", data);
  }

  trace(data: any) {
    this.log("trace", data);
  }
}

export default (
  sinkConfig: SinkConfig,
  categoryKey: CategoryKeyType,
  //sinkFactory: SinkFactory
) => new Logger(sinkConfig,categoryKey);
