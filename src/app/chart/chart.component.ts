import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { IDataset } from './chart.interface';

declare const $: any;

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnInit {
	public chartColor;
	public canvas: any;
	public ctx: any;
	public chart: any;

	@Input() classList: string[];
	@Input() width: number; // 456
	@Input() heigth: number; // 300
	@Input() elId: string;
	@Input() chartType: 'bar' | 'donut' | 'line';
	@Input() chartData: number[];
	@Input() backgroundColor: string[];
	@Input() labels: number[];
	@Input() datasets: IDataset[];

	public gradientStroke: any;
	public gradientFill: any;

	constructor() { }

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

		return alpha ?
			'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')' :
				'rgb(' + r + ', ' + g + ', ' + b + ')';
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.chartColor = '#FFFFFF';

		this.canvas = document.getElementById(this.elId);
		this.ctx = this.canvas.getContext('2d');

		Chart.pluginService.register({
			beforeDraw: function(chart) {
				if (chart.config.options.elements.center) {
					// Get ctx from string
					const ctx = chart.chart.ctx;

					// Get options from the center object in options
					const centerConfig = chart.config.options.elements.center;
					const fontStyle = centerConfig.fontStyle || 'Arial';
					const txt = centerConfig.text;
					const color = centerConfig.color || '#000';
					const sidePadding = centerConfig.sidePadding || 20;
					const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);

					// Start with a base font of 30px
					ctx.font = '30px ' + fontStyle;

					// Get the width of the string and also the width of the element minus 10 to give it 5px side padding
					const stringWidth = ctx.measureText(txt).width;
					const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

					// Find out how much the font can grow in width.
					const widthRatio = elementWidth / stringWidth;
					const newFontSize = Math.floor(30 * widthRatio);
					const elementHeight = chart.innerRadius * 2;

					// Pick a new font size so it will not be larger than the height of label.
					const fontSizeToUse = Math.min(newFontSize, elementHeight);

					// Set font settings to draw it correctly.
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
					const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
					ctx.font = fontSizeToUse + 'px ' + fontStyle;
					ctx.fillStyle = color;

					// Draw text in center
					ctx.fillText(txt, centerX, centerY);
				}
			}
		});

		if (this.chartType === 'donut') {
			this.donutChart();
		} else if (this.chartType === 'bar') {
			this.barChart();
		} else if (this.chartType === 'line') {
			this.lineChart();
		}
	}

	private donutChart() {
		this.chart = new Chart(this.ctx, {
			type: 'pie',
			data: {
				labels: [1, 2],
				datasets: [
					{
						label: 'Emails',
						pointRadius: 0,
						pointHoverRadius: 0,
						backgroundColor: this.backgroundColor,
						borderWidth: 0,
						data: this.chartData
					}
				]
			},
			options: {
				elements: {
					center: {
						text: this.chartData[0] + '%',
						color: '#66615c', // Default is #000000
						fontStyle: 'Arial', // Default is Arial
						sidePadding: 60 // Defualt is 20 (as a percentage)
					}
				},
				cutoutPercentage: 90,
				legend: {
					display: false
				},

				tooltips: {
					enabled: false
				},

				scales: {
					yAxes: [
						{
							ticks: {
								display: false
							},
							gridLines: {
								drawBorder: false,
								zeroLineColor: 'transparent',
								color: 'rgba(255,255,255,0.05)'
							}
						}
					],

					xAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								drawBorder: false,
								color: 'rgba(255,255,255,0.1)',
								zeroLineColor: 'transparent'
							},
							ticks: {
								display: false
							}
						}
					]
				}
			}
		});
	}

	private barChart() {
		this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
		this.gradientStroke.addColorStop(0, '#80b6f4');
		this.gradientStroke.addColorStop(1, this.chartColor);

		this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
		this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
		this.gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');

		this.chart = new Chart(this.ctx, {
			type: 'bar',
			data: {
				labels: this.labels,
				datasets: this.datasets
			},
			options: {
				tooltips: {
					tooltipFillColor: 'rgba(0,0,0,0.5)',
					tooltipFontFamily:
						'\'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
					tooltipFontSize: 14,
					tooltipFontStyle: 'normal',
					tooltipFontColor: '#fff',
					tooltipTitleFontFamily:
						'\'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
					tooltipTitleFontSize: 14,
					tooltipTitleFontStyle: 'bold',
					tooltipTitleFontColor: '#fff',
					tooltipYPadding: 6,
					tooltipXPadding: 6,
					tooltipCaretSize: 8,
					tooltipCornerRadius: 6,
					tooltipXOffset: 10
				},

				legend: {
					display: false
				},
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: '#9f9f9f',
								fontStyle: 'bold',
								beginAtZero: true,
								maxTicksLimit: 5,
								padding: 20
							},
							gridLines: {
								zeroLineColor: 'transparent',
								display: true,
								drawBorder: false,
								color: '#9f9f9f'
							}
						}
					],
					xAxes: [
						{
							barPercentage: 0.4,
							gridLines: {
								zeroLineColor: 'white',
								display: false,

								drawBorder: false,
								color: 'transparent'
							},
							ticks: {
								padding: 20,
								fontColor: '#9f9f9f',
								fontStyle: 'bold'
							}
						}
					]
				}
			}
		});
	}

	private lineChart() {
		this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
		this.gradientStroke.addColorStop(0, '#2CA8FF');
		this.gradientStroke.addColorStop(1, this.chartColor);

		this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
		this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
		this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.4));

		this.chart = new Chart(this.ctx, {
			type: 'line',
			data: {
				labels: this.labels,
				datasets: this.datasets
			},
			options: {
				legend: {
					display: false
				},

				tooltips: {
					enabled: false
				},

				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: '#9f9f9f',
								beginAtZero: false,
								maxTicksLimit: 5
								// padding: 20
							},
							gridLines: {
								drawBorder: false,
								zeroLineColor: 'transparent',
								color: 'rgba(255,255,255,0.05)'
							}
						}
					],

					xAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								drawBorder: false,
								color: 'rgba(255,255,255,0.1)',
								zeroLineColor: 'transparent',
								display: false
							},
							ticks: {
								padding: 20,
								fontColor: '#9f9f9f'
							}
						}
					]
				}
			}
		});
	}
}
