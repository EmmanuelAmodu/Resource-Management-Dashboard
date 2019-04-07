import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-depot',
	templateUrl: './depot.component.html',
	styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
	public depots: string[] = ['Lagos', 'Ibadan', 'Oyo', 'Kwara', 'Ekiti', 'Benin'];
	constructor() { }

	ngOnInit() {
	}

}
