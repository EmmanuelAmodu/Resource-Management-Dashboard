import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { LocalStorageService } from 'src/app/Services/LocalStore/local-storage.service';

declare const $: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
	focus;
	focus1;
	focus2;
	test: Date = new Date();
	private toggleButton;
	private sidebarVisible: boolean;
	private nativeElement: Node;

	loginForm = this.fb.group({
		username: [''],
		password: [''],
	});

	constructor(
		private fb: FormBuilder,
		private authSevice: AuthenticationService,
		private ls: LocalStorageService,
		private element: ElementRef,
		private router: Router) {
			this.nativeElement = element.nativeElement;
			this.sidebarVisible = false;
	}

	checkFullPageBackgroundImage() {
		const $page = $('.full-page');
		const image_src = $page.data('image');

		if (image_src !== undefined) {
			const image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
			$page.append(image_container);
		}
	}

	ngOnInit() {
		this.checkFullPageBackgroundImage();
		const body = document.getElementsByTagName('body')[0];
		body.classList.add('login-page');
		const navbar: HTMLElement = this.element.nativeElement;
		this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

		setTimeout(() => $('.card').removeClass('card-hidden'), 700);
	}

	ngOnDestroy() {
		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('login-page');
	}

	onSubmit() {
		this.authSevice.login({
			username: this.loginForm.value.username,
			password: this.loginForm.value.password
		}).subscribe(res => {
			if (res[0].token) {
				this.ls.store('auth', JSON.stringify(res[0]));
				this.authSevice.getUserDetails().subscribe(userDt =>
					this.ls.store('user_details', JSON.stringify(userDt)
				));
				this.router.navigate(['']);
			}
		});
	}

	sidebarToggle() {
		const toggleButton = this.toggleButton;
		const body = document.getElementsByTagName('body')[0];
		const sidebar = document.getElementsByClassName('navbar-collapse')[0];
		if (this.sidebarVisible === false) {
				setTimeout(() => toggleButton.classList.add('toggled'), 500);
				body.classList.add('nav-open');
				this.sidebarVisible = true;
		} else {
				this.toggleButton.classList.remove('toggled');
				this.sidebarVisible = false;
				body.classList.remove('nav-open');
		}
	}
}
