export class QuestionBase<T> {
	value: T;
	key: string;
	type: String;
	label: string;
	options: {};
	required: boolean;
	isReadOnly: boolean;
	order: number;
	controlType: string;

	constructor(options: {
		value?: T,
		key?: string,
		label?: string,
		required?: boolean,
		isReadOnly?: boolean;
		order?: number,
		type?: String,
		options?: string,
		controlType?: string
	} = {}) {
		this.value = options.value;
		this.key = options.key || '';
		this.label = options.label || '';
		this.type = options.type || '';
		this.options = options.options || '';
		this.required = !!options.required;
		this.isReadOnly = !!options.isReadOnly;
		this.order = options.order === undefined ? 1 : options.order;
		this.controlType = options.controlType || '';
	}
}

export interface IQuestionRaw { 
	options_model: any; 
	options: IOptions[]; 
	ftype: any; 
}

export interface IOptions {
	key: string; 
	value: string;
}