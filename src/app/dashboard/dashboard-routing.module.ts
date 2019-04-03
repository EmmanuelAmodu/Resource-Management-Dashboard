import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard, NegAuthGuard } from '../auth.guard';
import { LoginComponent } from '../authentication/login/login.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: DashboardComponent,
		children: [
			{
				path: '',
				component: StatisticsComponent,
			}

		]
	},
	{
		path: 'login',
		canActivate: [NegAuthGuard],
		component: LoginComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
