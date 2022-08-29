import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faFlask, faRupeeSign, 
        faLandmark, faFirstAid, faPiggyBank, 
        faChartLine, faComments, faMonument, 
        faLightbulb, faBrain, faMicrochip } from '@fortawesome/free-solid-svg-icons';

const icons = {
    "open": {
        src: <ExpandLessIcon />
    },
    "close":{
        src: <ExpandMoreIcon />
    },
    "Entrepreneurship":{
        src: <FontAwesomeIcon icon={faRocket} />
    },
    "Science":{
        src: <FontAwesomeIcon icon={faFlask} />
    },
    "Test":{
        src: <FontAwesomeIcon icon={faFlask} />
    },
    "Economics":{
        src: <FontAwesomeIcon icon={faRupeeSign} />
    },
    "Politics":{
        src: <FontAwesomeIcon icon={faLandmark} />
    },
    "Health":{
        src: <FontAwesomeIcon icon={faFirstAid} />
    },
    "Money":{
        src: <FontAwesomeIcon icon={faPiggyBank} />
    },
    "Marketing & Sales":{
        src: <FontAwesomeIcon icon={faChartLine} />
    },
    "Personal Development":{
        src: <FontAwesomeIcon icon={faFlask} />
    },
    "History":{
        src: <FontAwesomeIcon icon={faMonument} />
    },
    "Communication":{
        src: <FontAwesomeIcon icon={faComments} />
    },
    "Motivation":{
        src: <FontAwesomeIcon icon={faLightbulb} />
    },
    "Psychology":{
        src: <FontAwesomeIcon icon={faBrain} />
    },
    "Technology":{
        src: <FontAwesomeIcon icon={faMicrochip} />
    },
    "Philosophy":{
        src: <FontAwesomeIcon icon={faBrain} />
    }
};

export default icons;