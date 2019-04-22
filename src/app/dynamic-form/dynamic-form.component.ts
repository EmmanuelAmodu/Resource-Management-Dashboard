import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionControlService } from './service/question-control/question-control.service';
import { QuestionBase } from './Class/question-base';
import { QuestionService } from './service/question/question.service';
import { DataService } from '../Services/DataService/data.service';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

	questions: QuestionBase<any>[] = [];
	form = this.qcs.toFormGroup([]);
	@Input() form_name: string;
	@Input() form_action: Function;
	private formData = {data_model: '', data: {}};

	constructor(
		private qcs: QuestionControlService,
		private q: QuestionService) { }

	ngOnInit() {
		if (this.form_name !== undefined) {
			this.q.getQuestions(this.form_name).subscribe(questions => {
				this.questions = questions;
				this.form = this.qcs.toFormGroup(this.questions);
				this.formData.data_model = this.q.data_model;
			});
		}
	}

	onSubmit() {
		this.formData.data = this.form.value;
		this.form_action(this.formData);
	}
}
