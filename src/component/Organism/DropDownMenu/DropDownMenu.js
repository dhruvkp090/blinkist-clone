import React, { useContext } from 'react';
import Context from '../../../util/context';
import ButtonItem from '../../molecule/Button/ButtonItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MenuListItem from '../../molecule/MenuItem/MenuListItem';

const DropDownMenu = (props) => {

    const { categories } = useContext(Context);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExplore = (listItem) => {
        props.findBooksByCategory(listItem.id);
        props.setFilterTerm(listItem.name);
        setAnchorEl(null);
    };

    const {children,  ...others} = props;

    return (
        <div>
            <ButtonItem 
                color= 'primary'
                children= {children}
                variant= "text"
                endIconNeeded= "more"
                isOpen = {anchorEl}
                onClick={handleClick}
                data-testid="dropdown"
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClick={handleClose}
                style={{top: "60px", left: "10px", right: "0px", overflow: "hidden", minWidth: "100%"}}
            >
                <Container maxWidth="md">
                    <Grid container direction={"row"}>
                        {categories.map((listItem) => (
                            <MenuListItem 
                                onClick={() => handleExplore(listItem)}
                                color= 'secondary'
                                variant= "text"
                                size= 'large'
                                {...others}
                                listItems={[listItem]}
                            />
                        ))}
                    </Grid>
                </Container>
            </Menu>
        </div>
    );
};

export default DropDownMenu;
