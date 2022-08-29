import React, {useState, useEffect, useContext} from 'react';
import Context from '../../../util/context';
import ButtonItem from '../../molecule/Button/ButtonItem';
import SearchIcon from '@material-ui/icons/Search';
import SearchInputField from '../../atom/InputFields/SearchInputField';
import './NavBar.css';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from "../Profile/Profile";


const NavBarWithSearch = (props) => {
    const { searchTerm, setSearchTerm } = useContext(Context);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className="NavBar">
            <div class="left">
                {(width < breakpoint) ? 
                    <ButtonItem logoSize="small" onClick={props.onClickSearch} /> : 
                    <ButtonItem logoSize="big" onClick={props.onClickSearch} />}
                <ButtonItem children={<SearchIcon />} onClick={props.onClickSearch} data-testid="searchButton"/>
                <SearchInputField 
                    className="SearchBar" 
                    onClickCross={props.onClickSearch} 
                    placeholder={props.placeholder} 
                    value = {searchTerm}
                    onChange = {handleSearch}
                    style={{width: "30rem"}}
                />
            </div>
            {!isAuthenticated ? 
                <ButtonItem children="Login" variant="text" className="profileButton" color="primary" onClick={() => loginWithRedirect()} />
                : <Profile />
            }
        </div>
    );
};

export default NavBarWithSearch;
