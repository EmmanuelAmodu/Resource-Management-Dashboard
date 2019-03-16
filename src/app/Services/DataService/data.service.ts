import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = '';

    constructor(private http: HttpClient) {

    }

    public get(path: string = '', query: any = {}) {
        const url = this.baseUrl + '/' + path;
        return this.http.get(url, { params: query });
    }

    public post(path: string = '', body: any = {}) {
        const url = this.baseUrl + '/' + path;
        return this.http.post(url, body);
    }
}
