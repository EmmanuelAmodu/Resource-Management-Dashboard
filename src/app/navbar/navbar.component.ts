import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { filter } from 'rxjs/operators';

const misc: any = {
	navbar_menu_visible: 0,
	active_collapse: true,
	disabled_collapse_init: 0,
};

@Component({
	selector: 'app-navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.css']
})

export class NavbarComponent implements OnInit {
	location: Location;
	private nativeElement: Node;
	private toggleButton;
	private sidebarVisible: boolean;
	private _router: Subscription;

	public showSideBar = false;
	public showDepotBtn = true;

	@ViewChild('app-navbar') button;

	constructor(
		location: Location,
		private element: ElementRef,
		private router: Router,
		private actRouter: ActivatedRoute,
		private auth: AuthenticationService
		) {
			this.location = location;
			this.nativeElement = element.nativeElement;
			this.sidebarVisible = false;
	}

	ngOnInit() {

		const navbar: HTMLElement = this.element.nativeElement;
		const body = document.getElementsByTagName('body')[0];
		this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
		if (body.classList.contains('sidebar-mini')) {
			misc.sidebar_mini_active = true;
		}

		this._router = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe((event: NavigationEnd) => {
			const $layer = document.getElementsByClassName('close-layer')[0];
			if ($layer) {
				$layer.remove();
			}
		});

		if (this.getPath[1] === 'dashboard') {
			this.showSideBar = true;
		}

		if (this.getPath[1] === 'depot') {
			this.showDepotBtn = false;
		}
	}

	minimizeSidebar() {
		const body = document.getElementsByTagName('body')[0];

		if (misc.sidebar_mini_active === true) {
			body.classList.remove('sidebar-mini');
			misc.sidebar_mini_active = false;
		} else {
			setTimeout(function() {
				body.classList.add('sidebar-mini');
				misc.sidebar_mini_active = true;
			}, 300);
		}

		// we simulate the window Resize so the charts will get updated in realtime.
		const simulateWindowResize = setInterval(() => window.dispatchEvent(new Event('resize')), 180);

		// we stop the simulation of Window Resize after the animations are completed
		setTimeout(() => clearInterval(simulateWindowResize), 1000);
	}

	isMobileMenu() {
		return !(window.outerWidth < 991);
	}

	sidebarOpen() {
		const toggleButton = this.toggleButton;
		const html = document.getElementsByTagName('html')[0];
		setTimeout(() => toggleButton.classList.add('toggled'), 500);
		const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
		if (window.innerWidth < 991) {
			mainPanel.style.position = 'fixed';
		}
		html.classList.add('nav-open');
		this.sidebarVisible = true;
	}

	sidebarClose() {
		const html = document.getElementsByTagName('html')[0];
		this.toggleButton.classList.remove('toggled');
		this.sidebarVisible = false;
		html.classList.remove('nav-open');
		const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

		if (window.innerWidth < 991) {
			setTimeout(() => mainPanel.style.position = '', 500);
		}
	}

	sidebarToggle() {
		this.sidebarVisible === false ? this.sidebarOpen() : this.sidebarClose();
	}

	get getPath() {
		return this.location.path().split('/');
	}

	getLink() {
		this.router.navigateByUrl('');
	}

	logout() {
		this.auth.logout().subscribe((res: {status: boolean}) => {
			if (res.status) {
				// TODO logout should be lock screen
				this.router.navigate(['login']);
			}
		});
	}
}
