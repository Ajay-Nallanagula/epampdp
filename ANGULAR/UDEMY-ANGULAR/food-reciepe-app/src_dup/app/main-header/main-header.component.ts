import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
})
class MainHeaderComponent {
  @Output() activeRoute = new EventEmitter<string>();

  constructor() {}

  onRouteMenuClick(routeName: string) {
    this.activeRoute.emit(routeName);
  }
}

export default MainHeaderComponent;
