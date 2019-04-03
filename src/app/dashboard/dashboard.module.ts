import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FooterComponent } from './footer/footer.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
	declarations: [
		DashboardComponent,
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
		StatisticsComponent
	],
	imports: [
		CommonModule,
		AuthenticationModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
