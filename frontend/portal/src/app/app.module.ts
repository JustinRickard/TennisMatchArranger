import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { appRoutes } from './routes';

import { ClubsComponent } from './admin/clubs/clubs/clubs.component';
import { ClubDetailsComponent } from './admin/clubs/club-details/club-details.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchesComponent } from './matches/matches.component';
import { UsersComponent } from './admin/users/users/users.component';
import { UserDetailsComponent } from './admin/users/user-details/user-details.component';
import { RolesComponent } from './admin/roles/roles/roles.component';
import { RoleDetailsComponent } from './admin/roles/role-details/role-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClubsComponent,
    ClubDetailsComponent,
    HomeComponent,
    DashboardComponent,
    MatchesComponent,
    UsersComponent,
    UserDetailsComponent,
    RolesComponent,
    RoleDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
