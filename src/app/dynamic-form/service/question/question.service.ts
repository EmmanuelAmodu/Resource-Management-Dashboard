import { Injectable } from '@angular/core';
import { QuestionBase } from '../../Class/question-base';
import { DropdownQuestion } from '../../Class/question-dropdown';
import { TextboxQuestion } from '../../Class/question-textbox';
import { DataService } from 'src/app/Services/DataService/data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	private typeMap = {'Dropdown': DropdownQuestion, 'Textbox': TextboxQuestion};
	public data_model:  string;

	constructor(private dataService: DataService) {}

	public getQuestions(form_name: string) {
		const questionRaw = this.dataService.get('app/forms', {form_name: form_name});
		return this.createFormOption(questionRaw);
	}

	private createFormOption(questionRaw: Observable<any>) {
		return map((raw: any) => {
			this.data_model = raw[0].data_model;
			const form_fields = raw[0].form_fields;
			const questions = form_fields.map(question => {
				if (question.options_model) {
					question.options = this.getOptions(question.options_model);
					delete question.options_model;
				}
				const optionType = this.typeMap[question['ftype']];
				delete question.options_model;
				question = new optionType(question);
				return question;
			});
			return questions.sort((a, b) => a.order - b.order);
		})(questionRaw);
	}

	// TODO: get value from
	private getOptions(model) {
		return [
			{ key: 'solid', value: 'Solid' },
			{ key: 'great', value: 'Great' },
			{ key: 'good', value: 'Good' },
			{ key: 'unproven', value: 'Unproven' }
		];
	}
}
