import { AuthGuard } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRouteModule } from './app-route.module';
import { AuthService } from './auth.service';
//import CanGuardDeactivateSrvc from './servers/edit-server/can-guard-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PagenotfoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRouteModule],
  providers: [ServersService, AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
