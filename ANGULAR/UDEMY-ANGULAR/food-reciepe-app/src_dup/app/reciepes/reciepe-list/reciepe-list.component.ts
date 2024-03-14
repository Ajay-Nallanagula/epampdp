import { Component, EventEmitter, Output } from '@angular/core';
import { ReciepeModel } from '../reciepe.model';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrl: './reciepe-list.component.css',
})
export class ReciepeListComponent {
@Output() selectedItem = new EventEmitter<ReciepeModel>()

  reciepes: ReciepeModel[] = [
    new ReciepeModel(
      'test1',
      'https://picsum.photos/id/13/2500/1667',
      'authentic Hyderabadi Biryani'
    ),
    new ReciepeModel(
      'test2',
      'https://picsum.photos/id/23/3887/4899',
      'authentic Hyderabadi Sweet'
    ),
  ];
  constructor() {}


}
