import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './Services/DataService/data.service';
import { LocalStorageService } from './Services/LocalStore/local-storage.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { DynamicFormsModule } from './dynamic-form/dynamic-form.module';
import { DepotComponent } from './Components/depot/depot.component';
import { StationComponent } from './Components/station/station.component';
import { NavbarModule } from './navbar/navbar.module';
import { ChartModule } from './chart/chart.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
	declarations: [
		AppComponent,
		DepotComponent,
		StationComponent
	],
	imports: [
		BrowserModule,
		NavbarModule,
		AppRoutingModule,
		HttpClientModule,
		AuthenticationModule,
		DynamicFormsModule,
		ChartModule,
		TablesModule,
	],
	providers: [DataService, LocalStorageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
