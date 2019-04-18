import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
	selector: 'app-request',
	templateUrl: './request.component.html',
	styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
	public form_name = 'SupplyRequestForm';

	constructor(
		private ds: DataService
	) { }

	ngOnInit() {
	}

	public submitFormAction(formData: {data_model: string, data: any}) {
		this.ds.post('app/request', formData)
			.subscribe(res => console.log(res));
	}
}
