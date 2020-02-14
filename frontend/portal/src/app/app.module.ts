import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ResultService } from './services/result.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { BallComponent } from './shared/ball/ball.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LeagueTableComponent } from './dashboard/league-table/league-table.component';
import { ModalComponent } from './shared/modal/modal.component';

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
    RoleDetailsComponent,
    BallComponent,
    LoaderComponent,
    LeagueTableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [
    ResultService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
