import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { FooterComponent } from './footer/footer.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
	declarations: [
		DashboardComponent,
		SidebarComponent,
		FooterComponent,
		StatisticsComponent
	],
	imports: [
		CommonModule,
		AuthenticationModule,
		NavbarModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
