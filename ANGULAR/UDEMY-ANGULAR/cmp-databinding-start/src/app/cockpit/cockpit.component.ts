import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import ServerElementType from '../model/schema/serverElementSchema';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent implements OnChanges {
  @Output() serverCreated = new EventEmitter<ServerElementType>();
  @Output() blueprintcreated = new EventEmitter<ServerElementType>();
  @ViewChild('serverContent', { static: true }) serverContentText: ElementRef;
  newServerName = '';
  newServerContent = '';

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CockpitComponent --> ngOnChanges');
  }

  onAddServer(serverName: HTMLInputElement) {
    console.log(this.serverContentText);
    this.serverCreated.emit({
      type: 'server',
      name: serverName.value, //LOCAL REFERENCE,  #serverName in HTML
      content: this.serverContentText.nativeElement.value, //this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverCreated.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
