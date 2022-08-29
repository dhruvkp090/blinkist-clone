import React from 'react';
import CardGrid from '../../molecule/CardGrid/CardGrid';
import TabsList from '../../atom/Tabs/TabsList';
import TabPanel from '../../atom/TabPanel/TabPanel';

const CardsInTabs = (props) => {
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    
    
    return (
        <>
            <TabsList children={["Currently Reading", "Finished"]} value={currentTab} onChange={handleChange} />
            <TabPanel value={currentTab} index={0}>
                <CardGrid addToLibrary={props.addToLibrary} isInLibrary={props.isInLibrary} bookList={props.unFinished} onClick={props.changeReadStatus} />
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <CardGrid addToLibrary={props.addToLibrary} isInLibrary={props.isInLibrary} bookList={props.finished} onClick={props.changeReadStatus} />
            </TabPanel>
        </>
    );
};

export default CardsInTabs;