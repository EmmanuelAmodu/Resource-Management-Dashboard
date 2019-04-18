import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare var $: any;

declare interface DataTable {
	headerRow: string[];
	footerRow: string[];
	dataRows: string[][];
}

@Component({
	selector: 'app-extended-table',
	templateUrl: './extended-table.component.html',
	styleUrls: ['./extended-table.component.css']
})
export class ExtendedTableComponent implements OnInit, AfterViewInit {
	public headerKeys: string[];
	public headerValue: string[];

	@Input() headers: any;
	@Input() body: any[];

	ngOnInit() {
		this.headerKeys = Object.keys(this.headers);
		this.headerValue = this.headerKeys.map(e => this.headers[e]);
	}

	ngAfterViewInit() {
		$('#datatable').DataTable({
			'pagingType': 'full_numbers',
			'lengthMenu': [
				[10, 25, 50, -1],
				[10, 25, 50, 'All']
			],
			responsive: true,
			language: {
				search: '_INPUT_',
				searchPlaceholder: 'Search records',
			}
		});
		const table = $('#datatable').DataTable();

		// Edit record
		table.on('click', '.edit', function() {
			const $tr = $(this).closest('tr');
			const data = table.row($tr).data();
			alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
		});

		// Delete a record
		table.on('click', '.remove', function(e) {
			const $tr = $(this).closest('tr');
			table.row($tr).remove().draw();
			e.preventDefault();
		});

		// Like record
		table.on('click', '.like', function() {
			alert('You clicked on Like button');
		});
	}
}

