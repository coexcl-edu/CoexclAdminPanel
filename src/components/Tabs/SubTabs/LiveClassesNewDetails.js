import React from 'react'
import LiveClassesSubTabs from './LiveClassesSubTabs'
import SubjectSelect from '../../DropDown/SubjectSelect';
import { Button } from '@mui/material';
import DateTimePicker from 'react-datetime-picker';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicSelect from '../../DropDown/BasicSelect';
import { AppContext } from '../../../context/AppContext';
import AddLive from './AddLive';
import ListLive from './ListLive';
import BasicAlert from '../Utility/Alert';

export default function LiveClassesNewDetails(props) {
  const {datAndTimePicker, onchangeDateAndTimePicker,className, setClassName ,subject, setSubject ,liveClassTabsValue, setLiveClassTabsValue ,isListLiveActive ,setIsListLiveActive , isAddNewLiveActive ,setIsAddNewLiveActive ,topic ,setTopic,duration ,setDuration ,teacherName ,setTeacherName ,description ,setDescription ,meetingUrl ,setMeetingUrl ,isDisplayAlert, setIsDisplayAlert} =React.useContext(AppContext);
//   const [isListLiveActive ,setIsListLiveActive] = React.useState(true);
//   const [isAddNewLiveActive ,setIsAddNewLiveActive] = React.useState(false);

  const dynamicDisplayStyleForLiveList = ()=>{
    if(isListLiveActive){
      return {display:'block'}
    }else{
      return {display:'none'}
    }
  }
  const dynamicDisplayStyleForLiveAddNew = () =>{
    console.log("dynamicDisplayStyleForLiveAddNew");
    if(isAddNewLiveActive){
      return {display:'block'}
    }else{
      return {display:'none'}
    }
  }
  const displayValueForAlert = () =>{
    console.log("displayValueForAlert");
    if(isDisplayAlert){
      return {display:'block'}
    }else{
      return {display:'none'}
    }
  }

  return (
    <div name="liveClassesForm">
       <h4> LIVE CLASSES </h4>
        <div> <LiveClassesSubTabs/></div>
        <BasicAlert displayValueForAlert={displayValueForAlert}/>
        <AddLive saveLiveClassesDetail ={props.saveLiveClassesDetail}  dynamicDisplayStyleForLiveAddNew={dynamicDisplayStyleForLiveAddNew}> </AddLive>
        <ListLive dynamicDisplayStyleForLiveList={dynamicDisplayStyleForLiveList}> </ListLive>
    </div>
  )
}
