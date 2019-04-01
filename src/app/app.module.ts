import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './Services/DataService/data.service';
import { LocalStorageService } from './Services/LocalStore/local-storage.service';
import { DynamicFormsModule } from './dynamic-form/dynamic-form.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DynamicFormsModule,
		AuthenticationModule,
		HttpClientModule
	],
	providers: [DataService, LocalStorageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
