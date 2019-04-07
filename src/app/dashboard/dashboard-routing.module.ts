import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard, NegAuthGuard } from '../auth.guard';
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
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
