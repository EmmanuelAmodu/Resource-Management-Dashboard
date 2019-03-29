import { Injectable } from '@angular/core';
import { QuestionBase } from '../../Class/question-base';
import { DropdownQuestion } from '../../Class/question-dropdown';
import { TextboxQuestion } from '../../Class/question-textbox';
import { DataStub } from '../../../../Services/DataService/data.stub.temp';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    private typeMap = {'Dropdown': DropdownQuestion, 'Textbox': TextboxQuestion};

    public get questions() {
        return this.loadQuestions();
    }

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    private loadQuestions() {
        const questionRaw: any = new DataStub().getQuestionsMap('SupplyRequestForm');

        const questions = questionRaw.map(question => {
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
