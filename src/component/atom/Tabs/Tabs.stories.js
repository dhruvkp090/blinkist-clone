import React from 'react';
import TabsList from './TabsList';

export default {
    title: "Atom/Tabs",
    component: TabsList,
    argTypes: {
        value: {
            control: {
                type: 'radio',
                options: [0, 1]
            }
        }
    }
};

const Template = args=>(<TabsList {...args} />);




export const RecentReadList = Template.bind({});
RecentReadList.args = {
    children: ["Currently Reading", "Finished"],
    value:0
};