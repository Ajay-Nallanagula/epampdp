import { ServersService } from './../servers.service';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export type Server = { id: number; name: string; status: string };

export const ServerResolver: ResolveFn<Server> = (route, state) => {
  const serverInfo = inject(ServersService).getServer(+route.params['id']);
  console.log('ServerResolver', { serverInfo });
  return serverInfo;
};
