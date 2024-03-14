import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadUsers() {
    this.router.navigate(['/users']);
  }
  onLoadServers() {
    this.router.navigate(['/servers', 5, 'edit'], {
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    });
  }

  onLogOut() {
    this.authService.logout();
  }

  OnLogin() {
    this.authService.login();
  }
}
