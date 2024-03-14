import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  timer:number= 0
  stopInterval: ReturnType<typeof setInterval>;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() {}

  onStartHandler() {
    this.stopInterval = setInterval(() => {
      this.timer = this.timer + 1;
      this.intervalFired.emit(this.timer);
    }, 1000);
  }

  onStopHandler() {
    clearInterval(this.stopInterval);
  }
}
