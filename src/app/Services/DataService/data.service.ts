import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../LocalStore/local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private baseUrl = 'http://localhost:8901/';

	constructor(
		private http: HttpClient,
		private ls: LocalStorageService
	) { }

	public get(path: string = '', query: any = {}) {
		this.getTokenLocal();
		query.username = this.auth.username;
		query.token = this.auth.token;
		const url = this.baseUrl + path;
		return this.http.get(url, {params: query });
	}

	public post(path: string = '', body: any = {}) {
		const url = this.baseUrl + path;
		return this.http.post(url, body);
	}

	private getTokenLocal() {
		return JSON.parse(this.ls.fetch('auth'));
	}

	public get auth() {
		return this.getTokenLocal();
	}
}
