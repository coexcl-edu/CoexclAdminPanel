import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppContext } from '../../../context/AppContext';

export default function LiveClassesSubTabs() {
  const {isListLiveActive ,setIsListLiveActive , isAddNewLiveActive ,setIsAddNewLiveActive} = React.useContext(AppContext);
  const [liveClassTabsValue, setLiveClassTabsValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setLiveClassTabsValue(newValue);
    if(newValue===1){
      setIsAddNewLiveActive(true);
      setIsListLiveActive(false);
    }else{
      setIsAddNewLiveActive(false);
      setIsListLiveActive(true);
    }
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={liveClassTabsValue} onChange={handleChange} >
        <Tab label="List" />
        <Tab label="Add" />
      </Tabs>
    </Box>
  );
}
