import React from 'react';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './Form.css';

const FormInputField = (props) => {
    const { labelText , ...rest} = props;
    return (
        <div>
            <Typography data-testid="formLabel" variant="h6" color="secondary" gutterBottom>
                {labelText}
            </Typography>
                <TextField
                    size= 'medium'
                    variant= 'outlined'
                    className="field"
                    fullWidth
                    data-testid="textField"
                    autoComplete="off"
                    {...rest}
                />
        </div>
    );
};

export default FormInputField;
