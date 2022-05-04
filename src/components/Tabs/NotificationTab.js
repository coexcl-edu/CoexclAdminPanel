import React from 'react'
import { useEffect} from 'react';
import { getNotificationList } from '../../api/notificationApi';
import { AppContext } from '../../context/AppContext';
import NotificationList from './Utility/NotificationList';


export default function NotificationTab(props) {
    const {logeedInAuthToken,isLogedIn ,notificationList,setNotificationList,isNotificationTabVisible} = React.useContext(AppContext);
    useEffect(() => {
        let abortController = new AbortController(); 
        if(isLogedIn && isNotificationTabVisible){
            console.log("IsLogged In Details :-- "+isLogedIn);
            console.log("logeedInAuthToken "+JSON.stringify(logeedInAuthToken));
        
            getNotificationList(logeedInAuthToken)
                .then(result => {
                    console.log(" Notification Details :- "+JSON.stringify(result));
                    setNotificationList(result.data);
                    abortController.abort();
                })
        
      }}, [isLogedIn,logeedInAuthToken,isNotificationTabVisible]);
  return (
    <div>
    {!isLogedIn ?
        <div></div>
        :
            <div style={props.dispLayValue()}>
                <h4> NOTICE </h4>
                {/* <div>Student-List</div> */}
                {/* <StudentList liveStudentList={liveStudentList} /> */}
                <NotificationList notificationList={notificationList} />
            </div>
    }
    </div>
  )
}
