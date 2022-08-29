import React, { useContext } from 'react';
import Context from '../../../util/context';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './Form.css';


const FormSelectField = (props) => {
    const  { labelText, ...rest} = props;

    const { categories } = useContext(Context);
    return (
        <div>
            <Typography variant="h6" color="secondary" gutterBottom>
                {labelText}
            </Typography>
            <Select
                size= 'medium'
                variant= 'outlined'
                fullWidth
                placeholder="category"
                {...rest}
            >
                <MenuItem key={-1} value={0} selected disabled>Select {labelText}</MenuItem>
                {categories.map((listItem, index) => (<MenuItem key={index} value={listItem.id}>{listItem.name}</MenuItem>))}
            </Select>
        </div>
    );
};

export default FormSelectField;
