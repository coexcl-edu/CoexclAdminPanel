import React from 'react'
import MainDrawer from './components/main/MainDrawer'
import LoginTab from './components/Tabs/LoginTab';
import SignIn from './components/Tabs/SignIn';
import { AppContext } from './context/AppContext';
/**
 * 
 * @author Manjeet kumar
 */
export default function AppMain() {

  const [selectedTab , SetselectedTab] = React.useState("Home");
  const  [isLogedIn , setIsLogedIn] = React.useState(false);
  const  [logedInDetails ,setLogedIngDetails] = React.useState({});

  const [isHomeTabVisible , setIsHomeTabVisible] = React.useState(true);
  const [isStudentTabVisible, setIsStudentTabVisible] = React.useState(false);
  const [isLoginTabVisible,setIsLoginTabVisible] = React.useState(false);
  const [isLiveClassesTabVisible,setIsLiveClassesTabVisible] = React.useState(false);
  const [isNotificationTabVisible,setIsNotificationTabVisible] = React.useState(false);

  const [logeedInAuthToken, setLoggedInAuthToken] = React.useState("");
  const [loogedInSchoolDetails , setLoggedInSchoolDetails]= React.useState({});

  const [datAndTimePicker, onchangeDateAndTimePicker] = React.useState(new Date());
  const [className, setClassName] = React.useState(6);
  const [subject, setSubject] = React.useState("");

  const [topic ,setTopic]= React.useState("");
  const [duration ,setDuration]= React.useState(0);
  const [teacherName ,setTeacherName]= React.useState("");
  const [description ,setDescription]= React.useState("");
  const [meetingUrl ,setMeetingUrl]= React.useState("");

  const [liveClassesList,setLiveClassesList] = React.useState([]);  
  const [liveStudentList,setLiveStudentList] = React.useState([]); 
  const [notificationList,setNotificationList] = React.useState([]); 

  const [liveClassTabsValue, setLiveClassTabsValue] = React.useState(0);

  const [isListLiveActive ,setIsListLiveActive] = React.useState(true);
  const [isAddNewLiveActive ,setIsAddNewLiveActive] = React.useState(false);
  const [isDisplayAlert, setIsDisplayAlert] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openLiveClassModal, setOpenLiveClassModal] = React.useState(false);
  const [liveClassDateValue ,setLiveClassDateValue] = React.useState("");

  return (
    <>
    <AppContext.Provider value = {{selectedTab , SetselectedTab ,isLogedIn , setIsLogedIn ,isHomeTabVisible , setIsHomeTabVisible,isStudentTabVisible, setIsStudentTabVisible ,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,logeedInAuthToken, setLoggedInAuthToken,loogedInSchoolDetails , setLoggedInSchoolDetails ,isLiveClassesTabVisible,setIsLiveClassesTabVisible ,datAndTimePicker, onchangeDateAndTimePicker,className, setClassName ,subject, setSubject ,liveClassTabsValue, setLiveClassTabsValue ,isListLiveActive ,setIsListLiveActive , isAddNewLiveActive ,setIsAddNewLiveActive ,liveClassesList,setLiveClassesList ,liveStudentList,setLiveStudentList ,isNotificationTabVisible,setIsNotificationTabVisible,notificationList,setNotificationList ,topic ,setTopic,duration ,setDuration ,teacherName ,setTeacherName ,description ,setDescription ,meetingUrl ,setMeetingUrl,isDisplayAlert, setIsDisplayAlert, openModal, setOpenModal,openLiveClassModal, setOpenLiveClassModal,liveClassDateValue ,setLiveClassDateValue}}>
      <SignIn/>
    </AppContext.Provider>
    </>
  )
}
