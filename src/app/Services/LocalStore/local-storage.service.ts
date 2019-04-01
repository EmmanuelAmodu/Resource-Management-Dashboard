import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	store(key: string, value: {} | string) {
		let value_str = '';
		if (value.constructor === Object) {
			value_str = JSON.stringify(value);
		}
		localStorage.setItem(key, value_str);
	}

	fetch(key: string) {
		return localStorage.getItem(key);
	}
}
