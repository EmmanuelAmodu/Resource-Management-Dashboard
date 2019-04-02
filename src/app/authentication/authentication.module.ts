import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	exports: [LoginComponent],
	providers: [AuthenticationService]
})
export class AuthenticationModule { }
