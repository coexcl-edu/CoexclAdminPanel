import { Button } from '@mui/material';
import React from 'react'
import DateTimePicker from 'react-datetime-picker';
import { AppContext } from '../../context/AppContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicSelect from '../DropDown/BasicSelect';
import SubjectSelect from '../DropDown/SubjectSelect';
import LiveClassesSubTabs from './SubTabs/LiveClassesSubTabs';
import LiveClassesNewDetails from './SubTabs/LiveClassesNewDetails';
import { saveLiveClasses ,getListOfliveClasses} from '../../api/liveClassesApi';

export default function LiveClassesTab(props) {
    

const {loogedInSchoolDetails , setLoggedInSchoolDetails,selectedTab , SetselectedTab ,isLogedIn , setIsLogedIn ,isHomeTabVisible , setIsHomeTabVisible,isStudentTabVisible, setIsStudentTabVisible ,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,logeedInAuthToken, setLoggedInAuthToken ,datAndTimePicker, onchangeDateAndTimePicker,className, setClassName ,subject, setSubject ,liveClassTabsValue, setLiveClassTabsValue ,topic ,setTopic,duration ,setDuration ,teacherName ,setTeacherName ,description ,setDescription ,meetingUrl ,setMeetingUrl ,setLiveClassesList ,setIsDisplayAlert ,isLiveClassesTabVisible}= React.useContext(AppContext);

function afterSomeTime() {
    setIsDisplayAlert(false);
}
const saveLiveClassesDetail = ()=>{
    console.log(`Time Details :- ${datAndTimePicker}`);
    if(isLiveClassesTabVisible && datAndTimePicker && className && subject && topic && duration && teacherName && description){
        console.log(datAndTimePicker.getTime());   
        console.log(`ClassName : - ${className}`);
        saveLiveClasses(className,subject,topic,teacherName,duration,meetingUrl,description,datAndTimePicker.getTime(),logeedInAuthToken).then(result =>{
            setIsDisplayAlert(true);
            setInterval(afterSomeTime, 5000);
            getListOfliveClasses(logeedInAuthToken).then(result=>{
                console.log("liveClasses fetched again ==> ");
                console.log(JSON.stringify(result));
                setLiveClassesList(result.data);
            })
        })


    }else{
        alert('Please Select all the input');
    }
}

return (
    <div style={props.dispLayValue()}>

    {!isLogedIn ?
     <div></div> 
    :
     <LiveClassesNewDetails saveLiveClassesDetail ={saveLiveClassesDetail}/>
    }

    </div>
  )
}
