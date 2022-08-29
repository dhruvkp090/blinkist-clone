import React from 'react';
import ButtonItem from '../Button/ButtonItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const List = (props) => {
    const {listItems, linkTo,   ...others} = props;
    return (
        <div>
            <ButtonGroup orientation={props.orientation}>
                {listItems.map((listItem, index) => (<ButtonItem children={listItem} onClick={props.restore_list} {...others} />))}
            </ButtonGroup>
        </div>
    );
};

export default List;
