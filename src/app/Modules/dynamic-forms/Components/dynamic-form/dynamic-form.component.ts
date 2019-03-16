import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../service/question-control/question-control.service';
import { QuestionBase } from '../../Class/question-base';
import { QuestionService } from '../../service/question/question.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService, private q: QuestionService) { }

    ngOnInit() {
        if (this.questions.length === 0) {
            this.questions = this.q.getQuestions();
        }

        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
