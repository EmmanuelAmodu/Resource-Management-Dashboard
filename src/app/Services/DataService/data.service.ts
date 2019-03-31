import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private baseUrl = 'http://localhost:8901/';

	constructor(private http: HttpClient) {}

	public get(path: string = '', query: any = {}) {
		query.username = 'EAmodu_1';
		query.token = '39281f80a7d1f84542cb6cef318cd4582d7a8ba0f68b641df482737a2b765f7eeb6855382ee1dd65ebcff9aa8daca035';
		const url = this.baseUrl + path;
		return this.http.get(url, {params: query });
	}

	public post(path: string = '', body: any = {}) {
		const url = this.baseUrl + path;
		return this.http.post(url, body);
	}
}
