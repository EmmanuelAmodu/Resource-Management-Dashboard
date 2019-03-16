import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { DynamicFormComponent } from './Components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../../Modules/dynamic-forms/Components/dynamic-form-question/dynamic-form-question.component';

@NgModule({
    declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
    imports: [
        CommonModule,
        DynamicFormsRoutingModule,
        ReactiveFormsModule
    ]
})
export class DynamicFormsModule { }
