import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css',
})
export class WarningAlertComponent {
  handleOnChange(event: Event) {
    console.log(event.target)
    const val = (<HTMLInputElement>event.target).value;
    alert(val);
  }
  onBtnClick() {
    alert('Hello World');
  }
}
