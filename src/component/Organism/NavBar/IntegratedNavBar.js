import { useState, useContext } from 'react';
import Context from '../../../util/context';
import NavBar from './NavBar';
import NavBarWithSearch from './NavBarWithSearch';
import './NavBar.css';

const IntegratedNavBar = ({toggleSearchBar, ...props}) => {

    const { setSearchTerm } = useContext(Context);
    

    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleChange = () => {
        setShowSearchBar(!showSearchBar);
        setSearchTerm("");
    };

    return (
        <div>
            {!showSearchBar ? 
                <NavBar {...props} onClickSearch={handleChange}
                    findBooksByCategory={props.findBooksByCategory} /> :

                <NavBarWithSearch onClickSearch={handleChange} 
                    placeholder="Search by Author or Title"
                />            
            }
        </div>
    );
};

export default IntegratedNavBar;
