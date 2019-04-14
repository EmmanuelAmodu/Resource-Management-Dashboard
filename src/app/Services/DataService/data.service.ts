import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../LocalStore/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private baseUrl = 'http://localhost:8901/';
	private auth: any;

	constructor(
		private http: HttpClient,
		private ls: LocalStorageService
	) { }

	public get(path: string, query: any = {}): Observable<any> {
		this.getTokenLocal();
		query.username = this.auth.username;
		query.token = this.auth.token;
		const url = this.baseUrl + path;
		return this.http.get(url, {params: query });
	}

	public post(path: string, body: any): Observable<any> {
		this.getTokenLocal();
		const url = this.baseUrl + path;
		return this.http.post(url, body, {
			headers: {
				username: this.auth.username,
				token: this.auth.token
			}
		});
	}

	private getTokenLocal() {
		this.auth = JSON.parse(this.ls.fetch('auth'));
	}
}
