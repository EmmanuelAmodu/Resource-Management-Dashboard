import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
	@Input() tableData: any[];
	tableHearders: string[];

	constructor() { }

	ngOnInit() {
		this.tableHearders = Object.keys(this.tableData[0]);
	}
}
