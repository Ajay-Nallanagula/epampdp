import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedRoute: string = '';
  title = 'food-reciepe-app';

  onNavigate($event: string) {
    this.selectedRoute = $event;
  }
}
