import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	store(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	fetch(key: string) {
		return localStorage.getItem(key);
	}
}