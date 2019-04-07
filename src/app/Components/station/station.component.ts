import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-station',
	templateUrl: './station.component.html',
	styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
	public stations: string[] = ['Ketu', 'Mile 12', 'Mile 2', 'Alapere', 'Oshodi', 'Agege', 'Iyano-Oworo'];
	public depotName: String;

	constructor(
		private actRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.depotName = this.actRoute.snapshot.params.depot;
	}

}
