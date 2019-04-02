import { Injectable } from '@angular/core';
import { DataService } from '../Services/DataService/data.service';
import { LocalStorageService } from '../Services/LocalStore/local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private dataService: DataService, private ls: LocalStorageService) { }

	public login(auth: {username: string, password: string}) {
		return this.dataService.post('auth/login', auth);
	}

	public get isLoggedIn() {
		const auth = JSON.parse(this.ls.fetch('auth'));
		return this.dataService.get('auth/isLoggedin', auth);
	}
}
