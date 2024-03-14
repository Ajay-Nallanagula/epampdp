import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css',
})
export class AssignmentComponent {
  isShowSecret: boolean;
  title = 'my-first-app';
  counter = 0;
  btnClickMeasure: number[] = [];

  handleToggleBtnClick() {
    this.isShowSecret = !this.isShowSecret;
    this.btnClickMeasure.push(this.counter++);
  }
}
