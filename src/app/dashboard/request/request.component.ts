import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
	selector: 'app-request',
	templateUrl: './request.component.html',
	styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
	public form_name = 'SupplyRequestForm';
	public gridHeader = {
		'_id': 'ID',
		'product_type': 'Product Type',
		'station': 'Station',
		'quantity': 'Quantity',
		'emailAddress': 'Email Address',
		'status': 'Status'
	};

	public pendingRequest: any[];

	constructor(
		private ds: DataService
	) { }

	ngOnInit() {
		// TODO fetch from remote
		this.pendingRequest = [
			{
				'_id' : 'REQ-20190417-51839',
				'product_type' : 'great',
				'station' : 'Ketu Station',
				'quantity' : '12',
				'emailAddress' : 'emmanuel.amodu@outlook.com',
				'status' : 'initiated'
			}
		];
	}

	public submitFormAction(formData: {data_model: string, data: any}) {
		this.ds.post('app/request', formData)
			.subscribe(res => console.log(res));
	}
}
