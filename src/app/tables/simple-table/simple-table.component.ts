import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-simple-table',
	templateUrl: './simple-table.component.html',
	styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent implements OnInit {

	@Input() tableData: any[];
	tableHearders: string[];

	constructor() { }

	ngOnInit() {
		this.tableHearders = Object.keys(this.tableData[0]);
	}
}

