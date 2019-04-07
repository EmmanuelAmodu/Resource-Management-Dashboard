import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard, NegAuthGuard, CanLoadDashBoardSection } from './auth.guard';
import { DepotComponent } from './Components/depot/depot.component';
import { StationComponent } from './Components/station/station.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		pathMatch: 'full',
		redirectTo: 'depot',
	},
	{
		path: 'depot',
		canActivate: [AuthGuard],
		component: DepotComponent
	},
	{
		path: 'stations/:depot',
		canActivate: [AuthGuard],
		component: StationComponent
	},
	{
		path: 'dashboard/:entity/:name',
		loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
	},
	{
		path: 'login',
		canActivate: [NegAuthGuard],
		component: LoginComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
