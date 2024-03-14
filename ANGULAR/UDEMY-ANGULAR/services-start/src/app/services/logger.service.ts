export class LoggerService {
  constructor() {}

  logStatusChange(accountStatus: string) {
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
