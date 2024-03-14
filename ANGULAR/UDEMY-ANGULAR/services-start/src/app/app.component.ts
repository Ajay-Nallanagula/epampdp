import { AccountsService } from './services/accounts.service';
import { LoggerService } from './services/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService, AccountsService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(
    private loggerService: LoggerService,
    private accountsService: AccountsService
  ) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    console.log(this.accounts);
  }
}
