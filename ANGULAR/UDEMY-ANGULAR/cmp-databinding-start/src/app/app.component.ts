import { Component } from '@angular/core';
import ServerElementType from './model/schema/serverElementSchema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  timer: number;
  oddNumber = 0;
  evenNumber = 0;
  constructor() {}

  serverElements: ServerElementType[] = [
    { type: 'XX', content: 'YYYY', name: 'ZZZZZ' },
  ];

  onBlueprintCreated($event: ServerElementType) {
    const { type, name, content } = $event;
    this.serverElements.push({ type, content, name });
  }
  onServerAdded($event: ServerElementType) {
    const { type, name, content } = $event;
    this.serverElements.push({ type, content, name });
  }

  onIntervalFiredEmitter($event: number) {
    this.timer = $event;
    this.isOdd();
  }

  isOdd() {
    if (this.timer % 2 !== 0) {
      this.oddNumber = this.timer;
    } else {
      this.evenNumber = this.timer;
    }
  }
}
