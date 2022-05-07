import React from 'react'
import { AppContext } from '../../context/AppContext';
import { saveLiveClasses ,getListOfliveClasses} from '../../api/liveClassesApi';
import PostLiveClass from './Utility/PostLiveClass';
import ListLive from './SubTabs/ListLive';
import BasicAlert from './Utility/Alert';


export default function LiveClassesTab(props) {
    

const {loogedInSchoolDetails , setLoggedInSchoolDetails,selectedTab , SetselectedTab ,isLogedIn , setIsLogedIn ,isHomeTabVisible , setIsHomeTabVisible,isStudentTabVisible, setIsStudentTabVisible ,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,logeedInAuthToken, setLoggedInAuthToken ,datAndTimePicker, onchangeDateAndTimePicker,className, setClassName ,subject, setSubject ,liveClassTabsValue, setLiveClassTabsValue ,topic ,setTopic,duration ,setDuration ,teacherName ,setTeacherName ,description ,setDescription ,meetingUrl ,setMeetingUrl ,setLiveClassesList ,setIsDisplayAlert ,isLiveClassesTabVisible, dateValue ,setDateValue, isDisplayAlert}= React.useContext(AppContext);

function afterSomeTime() {
    setIsDisplayAlert(false);
}

const displayValueForAlert = () =>{
    console.log("displayValueForAlert");
    if(isDisplayAlert){
      return {display:'block'}
    }else{
      return {display:'none'}
    }
  }

const saveLiveClassesDetail = ()=>{
    console.log(`Time Details :- ${datAndTimePicker}`);
    console.log(`Time Details dateValue :- ${dateValue}`);
    
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
    <div>
        <h2> LIVE CLASSES </h2>
        <BasicAlert displayValueForAlert={displayValueForAlert}/>
        <div style={{marginTop:'20px', marginBottom:"20px", alignSelf:'flex-end'}}> <PostLiveClass /></div>
        <ListLive></ListLive>
     </div> 
    }

    </div>
  )
}
