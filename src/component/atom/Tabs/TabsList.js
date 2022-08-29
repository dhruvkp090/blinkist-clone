import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

const TabsList = (props) => {


    return (
        <div>
            <Tabs
                value={props.value}
                onChange={props.onChange}
                indicatorColor="primary"
                textColor="primary"
            >
                {props.children.map((child, index) => <Tab role="tab" aria-label="child" key={index} label= {child} />)}
            </Tabs>
        </div>
    );
};

TabsList.propTypes = {
    children: PropTypes.node,
    value: PropTypes.any.isRequired,
};

export default TabsList;
