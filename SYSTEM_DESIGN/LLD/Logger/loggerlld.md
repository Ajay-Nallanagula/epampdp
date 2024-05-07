Requirements 
--Should be able to login to multiple sinks like Console,file,database
--Should be able to log at multiple levels like error,warning,debug,info,trace
--Category and place of logging should be configurable

Components Involved:
Logger class is exposed to client 

--Log levels should be decided at run time i.e configurable
--Sinks also should be decided at run time i.e configurable

What design Patterns you could use here ?
--> SOLID Principles
--> Design Patterns like 
    Singleton : Logger Instance 
    Factory: For creating different Sinks 
    
//Injector example

import 'reflect-metadata';
import { injectable, inject, Container } from 'inversify';

interface ISink {
  log: (message: string) => void;
}

@injectable()
class FileSink implements ISink {
  log(message: string) {
    console.log('Writing to a file:', message);
  }
}

@injectable()
class SinkFactory {
  create(): ISink {
    return new FileSink();
  }
}

@injectable()
class Logger {
  constructor(@inject('SinkFactory') private sinkFactory: SinkFactory) { }

  log(message: string) {
    const sink = this.sinkFactory.create();
    sink.log(message);
  }
}

// setup DI container
let container = new Container();
container.bind<SinkFactory>('SinkFactory').to(SinkFactory);
container.bind<Logger>('Logger').to(Logger);

// use DI container to resolve the dependencies and use the service
let logger = container.get<Logger>('Logger');
logger.log('Hello, World!');