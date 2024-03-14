import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Server } from './server-resolver.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params);
    // this.activatedRoute.params.subscribe((params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }
}
