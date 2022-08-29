import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import Avatar from '@material-ui/core/Avatar';
import ButtonItem from '../../molecule/Button/ButtonItem';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components';


const StyledMenu = styled(Menu)`
    .MuiMenu-paper:{
        min-width: 0;
    }
`;

const Profile=()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { user,isAuthenticated,logout } =useAuth0();
    

    return (
        isAuthenticated && (
        <div>
            <ButtonItem
                isOpen = {anchorEl}
                onClick={handleClick}
            >
                <Avatar alt={user.name} src={user.picture} />
            </ButtonItem>
            <NoSsr>
                <StyledMenu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClick={handleClose}
                    style={{top: "60px", width: "5%"}}
                >
                    <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
                </StyledMenu>
            </NoSsr>
        </div>
    )
    );
};

export default Profile;