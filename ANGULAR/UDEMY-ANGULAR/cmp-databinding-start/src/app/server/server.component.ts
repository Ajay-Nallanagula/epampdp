import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import ServerElementType from '../model/schema/serverElementSchema';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input('srvElement') element: ServerElementType = {
    type: 'serverType1',
    name: 'serverName1',
    content: 'serverContent1',
  };

  constructor() {
    console.log('ctor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ServerComponent --> ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ServerComponent --> ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ServerComponent --> ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ServerComponent --> ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ServerComponent --> ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ServerComponent --> ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ServerComponent --> ngAfterViewChecked');
  }
}
