import {React} from 'react';
import FormInputField from './FormInputField';
import SearchInputField from './SearchInputField';
import FormSelectField from './FormSelectField';

export default {
    title: "Atom/TextField",
    component: FormInputField,
};

const Template = args => (<div>
                            <FormInputField {...args} />
                        </div>);

export const PlainTextField = Template.bind({});
PlainTextField.args = {
    id: "standard-number",
    type: "text",
    size: 'medium',
    placeholder: 'Book Name',
    labelText: 'Book Name'
};

const SearchTemplate = args => (<div>
                            <SearchInputField {...args} />
                        </div>);

export const TextFieldWithIcon = SearchTemplate.bind({});
TextFieldWithIcon.args = {
    placeholder: "Search by Author or Title",
};

const SelectTemplate = args => (<div>
                            <FormSelectField {...args} />
                        </div>);

export const SelectField = SelectTemplate.bind({});
SelectField.args = {
    id: "standard-number",
    size: 'medium',
    labelText: 'Book Name',
    value: 0
};
