import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-request',
	templateUrl: './request.component.html',
	styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
	public form_name = 'SupplyRequestForm';

	constructor() { }

	ngOnInit() {
	}

	public submitFormCallBack(data: any, res: any) {
		console.log(data, res);
	}
}
