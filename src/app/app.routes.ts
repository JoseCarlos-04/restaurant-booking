import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {EditComponent} from './pages/edit/edit.component';
import {BookingsComponent} from './pages/bookings/bookings.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {StatsComponent} from './components/dashboard/stats/stats.component';
import {ProfileComponent} from './components/dashboard/profile/profile.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit', component: EditComponent},
  {path:'edit/:id', component: EditComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'stats', component: StatsComponent},
      {path: 'profile', component: ProfileComponent}]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];
