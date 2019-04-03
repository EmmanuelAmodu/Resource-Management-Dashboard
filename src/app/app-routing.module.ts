import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard, NegAuthGuard, CanLoadDashBoardSection } from './auth.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
		canActivate: [AuthGuard],
		canLoad: [CanLoadDashBoardSection]
	},
	{path: 'login', canActivate: [NegAuthGuard], component: LoginComponent},
	// {path: 'calender', canActivate: [AuthGuard], loadChildren: 'src/app/calender/calender.module#CalenderModule'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
