export class DataStub {
    /**
     *
     */
    private forms = {
        SupplyRequestForm: [
            {
                key: 'product_type',
                label: 'Product Type',
                ftype: 'Dropdown',
                options_model: 'product_type',
                order: 1
            },
            {
                key: 'station',
                label: 'Filling Station',
                value: 'Ketu Station',
                ftype: 'Textbox',
                required: true,
                order: 2
            },
            {
                key: 'quantity',
                label: 'Quantity',
                type: 'number',
                ftype: 'Textbox',
                order: 3
            },
            {
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                ftype: 'Textbox',
                order: 4
            }
        ]
    };

    public getQuestionsMap(name) {
        return this.forms[name];
    }
}

let dft = {
    form_name: 'SupplyRequestForm',
    role: 'StationManager',
    form_fields: [
        {
            key: 'product_type',
            label: 'Product Type',
            ftype: 'Dropdown',
            options_model: 'product_type',
            order: 1
        },
        {
            key: 'station',
            label: 'Filling Station',
            value: 'Ketu Station',
            ftype: 'Textbox',
            required: true,
            order: 2
        },
        {
            key: 'quantity',
            label: 'Quantity',
            type: 'number',
            ftype: 'Textbox',
            order: 3
        },
        {
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            ftype: 'Textbox',
            order: 4
        }
    ]
}
