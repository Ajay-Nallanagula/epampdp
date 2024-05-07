
export enum SinkType {
    Database = "Database",
    File = "File",
    Console = "Console",
  }
  
  export type SinkConfig = {
    sink: SinkType;
    sinkPath?: string;
  };
  
  export interface ISink {
    sendLog(sink: SinkConfig, errorMessage: string): boolean;
  }