import { Routes } from '@angular/router';
import { ClubsComponent } from './pages/admin/clubs/clubs/clubs.component';
import { ClubDetailsComponent } from './pages/admin/clubs/club-details/club-details.component';

export const appRoutes:Routes = [
    { path: 'clubs', component: ClubsComponent},
    { path: 'clubs/:id', component: ClubDetailsComponent },
    { path: '', redirectTo: 'clubs', pathMatch: 'full'} // redirect root to clubs temporarily for testing
];