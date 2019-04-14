import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NavbarModule } from '../navbar/navbar.module';
import { RequestComponent } from './request/request.component';
import { DynamicFormsModule } from '../dynamic-form/dynamic-form.module';

@NgModule({
	declarations: [
		DashboardComponent,
		SidebarComponent,
		FooterComponent,
		StatisticsComponent,
		RequestComponent
	],
	imports: [
		CommonModule,
		NavbarModule,
		DynamicFormsModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
