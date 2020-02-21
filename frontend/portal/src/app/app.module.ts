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
import { BallComponent } from './components/ball/ball.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LeagueTableComponent } from './dashboard/league-table/league-table.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBuilderComponent } from './components/builders/modal-builder/modal-builder.component';
import { AddSinglesResultComponent } from './features/add-singles-result/add-singles-result.component';

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
    ModalComponent,
    ModalBuilderComponent,
    AddSinglesResultComponent
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
