import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private baseUrl = 'http://localhost:8901/';

	constructor(private http: HttpClient) {}

	public get(path: string = '', query: any = {}) {
		query.username = 'EAmodu_1';
		query.token = '697d5f022cee3a5051ea8764221593fcc27d0f33a3119a6dc1af69bd3963f75bb3533c69cf8a33679f32eb921b709993';
		const url = this.baseUrl + path;
		return this.http.get(url, {params: query });
	}

	public post(path: string = '', body: any = {}) {
		const url = this.baseUrl + path;
		return this.http.post(url, body);
	}
}
