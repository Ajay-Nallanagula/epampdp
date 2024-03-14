import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-guard-deactivate.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  isChanged = false;
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.activatedRoute.queryParams.subscribe((qp) => {
      this.allowEdit = !!qp['allowEdit'];
    });
  }

  onUpdateServer() {
    this.isChanged = true;
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }

  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean> =
    () => {
      // if (!this.allowEdit) {
      //   return true;
      // }

      alert('CanDeactivate In Component');
      const changedStatus =
        (this.serverName !== this.server.name ||
          this.serverStatus !== this.server.status) &&
        !this.isChanged;

      if (changedStatus) {
        confirm('Do you want to discard the changes?');
      } else {
        return true;
      }
    };
}
