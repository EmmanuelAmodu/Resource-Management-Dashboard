import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { IDataset } from 'src/app/chart/chart.interface';

declare const $: any;

@Component({
	selector: 'app-stats',
	templateUrl: './statistics.component.html'
})
export class StatisticsComponent implements OnInit {
	public datasets_bar: IDataset[];
	datasets_line_3: any[];
	datasets_line_2: IDataset[];
	datasets_line_1: IDataset[];
	gradientFill: string;

	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

	public hexToRGB(hex, alpha) {
		const r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);

		if (alpha) {
			return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
		} else {
			return 'rgb(' + r + ', ' + g + ', ' + b + ')';
		}
	}

	public ngOnInit() {
		this.datasets_bar = [
			{
				label: 'Data',
				borderColor: '#fcc468',
				fill: true,
				backgroundColor: '#fcc468',
				hoverBorderColor: '#fcc468',
				borderWidth: 8,
				data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130]
			},
			{
				label: 'Data',
				borderColor: '#4cbdd7',
				fill: true,
				backgroundColor: '#4cbdd7',
				hoverBorderColor: '#4cbdd7',
				borderWidth: 8,
				data: [ 80, 140, 50, 120, 50, 150, 60, 130, 50, 130, 150, 100, 110, 80, 140, 50, 140, 50, 110, 150 ]
			}
		];

		this.datasets_line_1 = [
			{
				label: 'Active Users',
				borderColor: '#6bd098',
				pointRadius: 0,
				pointHoverRadius: 0,
				fill: false,
				borderWidth: 3,
				data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610]
			}
		];

		this.datasets_line_2 = [
			{
				label: 'Email Stats',
				borderColor: '#ef8156',
				pointHoverRadius: 0,
				pointRadius: 0,
				fill: false,
				backgroundColor: this.gradientFill,
				borderWidth: 3,
				data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
			}
		];

		this.datasets_line_3 = [
			{
				label: 'Active Countries',
				backgroundColor: this.gradientFill,
				borderColor: '#fbc658',
				pointHoverRadius: 0,
				pointRadius: 0,
				fill: false,
				borderWidth: 3,
				data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90]
			}
		];

		const mapData = { AU: 760, BR: 550, CA: 120, DE: 1300, FR: 540, GB: 690, GE: 200, IN: 200, RO: 600, RU: 300, US: 2920 };

		$('#worldMap').vectorMap({
			map: 'world_mill_en',
			backgroundColor: 'transparent',
			zoomOnScroll: false,
			regionStyle: {
				initial: {
					fill: '#e4e4e4',
					'fill-opacity': 0.9,
					stroke: 'none',
					'stroke-width': 0,
					'stroke-opacity': 0
				}
			},

			series: {
				regions: [
					{
						values: mapData,
						scale: ['#AAAAAA', '#444444'],
						normalizeFunction: 'polynomial'
					}
				]
			}
		});
	}
}
