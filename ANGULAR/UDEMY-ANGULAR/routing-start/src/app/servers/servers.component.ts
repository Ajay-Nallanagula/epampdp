import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onServersRefresh() {
    console.log(this.activatedRoute);
    //This is a relative route,
    //navigate() doesn't know what the current route is unlike routerLink,routerActiveLink
    //used in template, for navigate we need to explicty set "relativeTo"
    this.router.navigate(['servers'], { relativeTo: this.activatedRoute });
  }
}
