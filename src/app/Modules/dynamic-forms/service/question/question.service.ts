import { Injectable } from '@angular/core';
import { QuestionBase } from '../../Class/question-base';
import { DropdownQuestion } from '../../Class/question-dropdown';
import { TextboxQuestion } from '../../Class/question-textbox';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    private typeMap = {'Dropdown': DropdownQuestion, 'Textbox': TextboxQuestion};

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    public getQuestions() {
        const questionRaw: any = [
            {
                key: 'product_type',
                label: 'Product Type',
                ftype: 'Dropdown',
                options_model: 'product_type',
                order: 3
            },
            {
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                ftype: 'Textbox',
                required: true,
                order: 1
            },
            {
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                ftype: 'Textbox',
                order: 2
            }
        ];

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

    private getOptions(model) {
        return [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
        ];
    }
}
