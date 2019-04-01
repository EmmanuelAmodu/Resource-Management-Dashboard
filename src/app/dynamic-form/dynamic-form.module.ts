import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
	declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [DynamicFormComponent]
})
export class DynamicFormsModule { }
