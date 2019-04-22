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
		'orderid': 'ID',
		'product_type': 'Product',
		'product_quantity': 'Quantity',
		'request_status': 'Status'
	};

	public pendingRequest: any[];

	constructor(
		private ds: DataService
	) { }

	ngOnInit() {
		this.getPendingRequest();
	}

	getPendingRequest() {
		this.ds.get('app/request', { station_name: "Ketu Station" })
			.subscribe(res => this.pendingRequest = res);
	}

	public submitFormAction = function(formData: { data_model: string, data: any }) {
		this.ds.post('app/request', formData)
			.subscribe(res => this.getPendingRequest());
	}.bind(this)
}
