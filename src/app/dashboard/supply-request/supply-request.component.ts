import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
	selector: 'app-supply-request',
	templateUrl: './supply-request.component.html',
	styleUrls: ['./supply-request.component.css']
})
export class SupplyRequestComponent implements OnInit {

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
		this.ds.get('app/request', { station_name: "Ketu Station" })
			.subscribe(res => this.pendingRequest = res);
	}

}
