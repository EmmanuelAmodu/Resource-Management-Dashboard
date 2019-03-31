import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../service/question-control/question-control.service';
import { QuestionBase } from '../../Class/question-base';
import { QuestionService } from '../../service/question/question.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

	questions: QuestionBase<any>[] = [];
	form: FormGroup;
	payLoad = '';

	constructor(
		private qcs: QuestionControlService,
		private q: QuestionService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);

		this.route.params.subscribe(params => {
			this.q.getQuestions(params.form_name).subscribe(questions => {
				console.log(questions);
				this.questions = questions;
				this.form = this.qcs.toFormGroup(this.questions);
			});
		});
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}
}
