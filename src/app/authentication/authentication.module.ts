import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule
	],
	exports: [LoginComponent],
	providers: [AuthenticationService]
})
export class AuthenticationModule { }
