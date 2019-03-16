import { Injectable } from '@angular/core';
import { QuestionBase } from '../../Class/question-base';
import { DropdownQuestion } from '../../Class/question-dropdown';
import { TextboxQuestion } from '../../Class/question-textbox';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    public getQuestions() {
        const questions: QuestionBase<any>[] = [
            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),
            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),
            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}
