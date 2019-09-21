import { Routes } from '@angular/router';
import { ClubsComponent } from './admin/clubs/clubs/clubs.component';
import { ClubDetailsComponent } from './admin/clubs/club-details/club-details.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchesComponent } from './matches/matches.component';
import { UsersComponent } from './admin/users/users/users.component';
import { UserDetailsComponent } from './admin/users/user-details/user-details.component';
import { RolesComponent } from './admin/roles/roles/roles.component';
import { RoleDetailsComponent } from './admin/roles/role-details/role-details.component';

export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'matches', component: MatchesComponent},
    // admin
    { path: 'admin/users', component: UsersComponent},
    { path: 'admin/users/:id', component: UserDetailsComponent },
    { path: 'admin/roles', component: RolesComponent},
    { path: 'admin/roles/:id', component: RoleDetailsComponent },
    { path: 'admin/clubs', component: ClubsComponent},
    { path: 'admin/clubs/:id', component: ClubDetailsComponent },
    { path: '', redirectTo: 'clubs', pathMatch: 'full'} // redirect root to clubs temporarily for testing
];