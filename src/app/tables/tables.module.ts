import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { ExtendedTableComponent } from './extended-table/extended-table.component';

@NgModule({
	declarations: [SimpleTableComponent, ExtendedTableComponent],
	imports: [
		CommonModule
	],
	exports: [
		SimpleTableComponent,
		ExtendedTableComponent
	]
})
export class TablesModule { }
