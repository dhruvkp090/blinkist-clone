import { useState, useEffect} from 'react';
import ButtonItem from '../../molecule/Button/ButtonItem';
import SearchIcon from '@material-ui/icons/Search';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import List from '../../molecule/List/List';
import './NavBar.css';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from "../Profile/Profile";

import FormDialogueBox from '../FormDialogueBox/FormDialogueBox';

    
const NavBar = (props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const handleRestore = () =>{
        props.setFilterTerm("");
    };
    return (
        <div className="NavBar">
            <div class="left">
                {(width < breakpoint) ? 
                    <ButtonItem logoSize="small" onClick={handleRestore}/> : 
                    <ButtonItem logoSize="big" onClick={handleRestore}/>}

                <ButtonItem children={<SearchIcon />} 
                    onClick={props.onClickSearch} data-testid="searchButton" />

                <DropDownMenu children = "Explore"
                                findBooksByCategory={props.findBooksByCategory}
                                setFilterTerm={props.setFilterTerm}
                            />

                <List listItems={props.menuItems} linkTo={props.linkTo} 
                    color="primary" variant= "text" restore_list = {handleRestore} />
                <FormDialogueBox fetchCategory={props.fetchCategory}/>
            </div>
            {!isAuthenticated ? 
                <ButtonItem children="Login" variant="text" className="profileButton" color="primary" onClick={() => loginWithRedirect()} />
                : <Profile />
            }
        </div>
    );
};

export default NavBar;
