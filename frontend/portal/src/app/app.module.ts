import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MatchInvitationComponent } from './pages/matches/match-invitation/match-invitation.component';
import { BannerComponent } from './components/nav/banner/banner.component';
import { LoginComponent } from './pages/users/login/login.component';

import { ClubService } from "./services/club.service";
import { ClubsComponent } from './pages/admin/clubs/clubs/clubs.component';
import { ClubDetailsComponent } from './pages/admin/clubs/club-details/club-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchInvitationComponent,
    BannerComponent,
    LoginComponent,
    ClubsComponent,
    ClubDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
