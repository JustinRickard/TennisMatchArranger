import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchInvitationComponent } from './pages/matches/match-invitation/match-invitation.component';
import { BannerComponent } from './components/nav/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchInvitationComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
