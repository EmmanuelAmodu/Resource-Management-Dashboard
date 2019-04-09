import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-depot',
	templateUrl: './depot.component.html',
	styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
	public depots: string[] = ['Lagos', 'Ibadan', 'Oyo', 'Kwara', 'Ekiti', 'Benin'];
	public tableData: any[] = [
		{
			Product: 'Petrol',
			Reserve: '360 Tonnes'
		},
		{
			Product: 'Diesel',
			Reserve: '400 Tonnes'
		}
	];
	constructor() { }

	ngOnInit() {
	}
}
