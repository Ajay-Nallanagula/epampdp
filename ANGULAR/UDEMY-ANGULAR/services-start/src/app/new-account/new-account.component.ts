import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggerService, AccountsService],
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggerService: LoggerService,
    private accoutService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accoutService.onAccountAdded({
      name: accountName,
      status: accountStatus,
    });

    // console.log('A server status changed, new status: ' + accountStatus);
    this.loggerService.logStatusChange(accountStatus);
  }
}
