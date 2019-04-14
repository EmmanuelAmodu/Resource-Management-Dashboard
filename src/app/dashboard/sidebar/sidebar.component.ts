import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/Services/LocalStore/local-storage.service';
import { IRouteInfo, IUserDetails } from '../dashboard.interface';
import { DataService } from 'src/app/Services/DataService/data.service';


@Component({
	selector: 'app-sidebar',
	templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {
	public menuItems: any[];
	private location: Location;
	public userInfo: IUserDetails;

	constructor(
		location: Location,
		private ls: LocalStorageService,
		private ds: DataService
	) {
		this.location = location;
	}

	isNotMobileMenu() {
		if ( window.outerWidth > 991) {
			return false;
		}
		return true;
	}

	ngOnInit() {
		this.userInfo = JSON.parse(this.ls.fetch('user_details'))[0];
		this.ds.get('app/menu').subscribe((res: IRouteInfo[]) => {
			this.menuItems = res.filter((menuItem: IRouteInfo) => {
				let remenu = false;
				this.userInfo.roles.forEach(rl => {
					if (menuItem.permitTo.includes(rl)) { remenu = true; }
				});
				if (menuItem.title === 'Dashboard') { menuItem.path = this.location.path(); }
				if (remenu) { return menuItem; }
			});
		});
	}
}
