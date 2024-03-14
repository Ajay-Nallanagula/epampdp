import { Component, Input } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggerService, AccountsService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggerService: LoggerService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.onStatusChanged({ id: this.id, newStatus: status });
    this.loggerService.logStatusChange(status);
  }
}
