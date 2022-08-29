import Button from '@material-ui/core/Button';
import big from '../../../assets/logo/big.svg';
import small from '../../../assets/logo/small.svg';
import icons from '../../../assets/icons';
import PropTypes from 'prop-types';


const ButtonItem = (props) => {
    return (props.endIconNeeded? 
                <Button data-testid="icon-button" aria-label={props.children} role="button" 
                    endIcon = {ifOpenRenderUpArrowElseDownArrow(props)} {...props} >
                    {props.children}
                </Button> : 
                <Button role="button" {...props} style={{justifyContent:"center"}}>
                    {renderButtonWithLogoOrText(props)}
                </Button>
    );       
};

export default ButtonItem;


function ifOpenRenderUpArrowElseDownArrow(props) {
    return props.isOpen ? icons.open.src : icons.close.src;
}

function renderButtonWithLogoOrText(props) {
    return props.logoSize === "big" ?
        <img style={{ display: 'block', minWidth: "9rem" }} src={big} alt="large logo" /> :
        (renderSmallButtonOrButtonWithText());

    function renderSmallButtonOrButtonWithText() {
        return props.logoSize === "small" ?
            <img src={small} alt="small logo" /> : props.children;
    }
}

ButtonItem.propTypes = {
    isOpen: PropTypes.bool,
};