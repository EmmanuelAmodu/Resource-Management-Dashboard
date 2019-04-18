import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { StatisticsComponent } from './statistics/statistics.component';
import { RequestComponent } from './request/request.component';
import { SupplyRequestComponent } from './supply-request/supply-request.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: DashboardComponent,
		children: [
			{
				path: 'approval/supply_request',
				component: SupplyRequestComponent,
			},
			{
				path: ':entity/:name',
				component: StatisticsComponent,
			},
			{
				path: 'request',
				component: RequestComponent,
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
