import { Injectable } from '@angular/core';
import { DataService } from '../Services/DataService/data.service';
import { LocalStorageService } from '../Services/LocalStore/local-storage.service';
import { Observable } from 'rxjs';

interface IUserAuth {
	username: string;
	token: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private dataService: DataService, private ls: LocalStorageService) { }

	public login(auth: {username: string, password: string}): Observable<IUserAuth>  {
		return this.dataService.post('auth/login', auth);
	}

	public getUserDetails() {
		return this.dataService.get('auth/user_details', this.auth);
	}

	public get isLoggedIn() {
		return this.dataService.get('auth/isLoggedin', this.auth);
	}

	public logout() {
		return this.dataService.post('auth/logout', this.auth);
	}

	public get auth() {
		return JSON.parse(this.ls.fetch('auth'));
	}
}
