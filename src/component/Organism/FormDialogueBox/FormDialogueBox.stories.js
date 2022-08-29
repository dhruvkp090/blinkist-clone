import React from 'react';
import FormDialogueBox from './FormDialogueBox';

export default {
    title: "Organism/FormDialogueBox",
    component: FormDialogueBox,
};

const Template = args => (<FormDialogueBox {...args} />);

const test = () => {
    console.log("Check");
};

export const Default = Template.bind({});
Default.args = {
    fetchCategory: test
};