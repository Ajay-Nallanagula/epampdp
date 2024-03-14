import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReciepeModel } from '../../reciepe.model';

@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrl: './reciepe-item.component.css',
})
export class ReciepeItemComponent {
  @Input('reciepe') reciepe: ReciepeModel;
  //@Output() reciepeItemOutput = new EventEmitter<ReciepeModel>();

  constructor() {}
}
