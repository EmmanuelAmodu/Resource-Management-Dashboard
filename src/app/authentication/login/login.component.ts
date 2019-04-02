import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { LocalStorageService } from 'src/app/Services/LocalStore/local-storage.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm = this.fb.group({
		username: [''],
		password: [''],
	});

	constructor(
		private fb: FormBuilder,
		private authSevice: AuthenticationService,
		private ls: LocalStorageService) { }

	ngOnInit() {
	}

	onSubmit() {
		console.log(this.authSevice);
		this.authSevice.login({
			username: this.loginForm.value.username,
			password: this.loginForm.value.password
		}).subscribe(res => {
			if (res[0].token) {
				this.ls.store('auth', JSON.stringify(res[0]));
				console.log(res);
			}
		});
	}

}
