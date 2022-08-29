import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import icons from '../../../assets/icons';


const addIcon = (name) => {
    try  { 
        return icons[name].src;
    }
    catch (e) {
        return icons["Test"].src;
    }
};

const MenuListItem = ({listItems, ...props}) => {
    return (
        listItems.map((listItem) => (
            <Grid item xs={12} sm={6} md={4} key={props.unique}>
                <MenuItem
                    {...props}>
                    <ListItemIcon>
                        {addIcon(listItem.name)}
                    </ListItemIcon>
                    <Typography variant="h3" style={{paddingTop: "0.5rem"}}>
                        {listItem.name}
                    </Typography>
                </MenuItem>
            </Grid>
        ))
    );
};

export default MenuListItem;
