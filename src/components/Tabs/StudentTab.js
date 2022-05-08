import React from 'react'
import { useEffect ,useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { getListOfStudentByClass } from '../../api/studentApi';
import StudentList from './Utility/StudnetList';

export default function StudentTab(props) {

    const {logeedInAuthToken,isLogedIn ,liveStudentList,setLiveStudentList,isStudentTabVisible, className, setClassName } = useContext(AppContext);
    useEffect(() => {
        let abortController = new AbortController();
        if(isLogedIn && isStudentTabVisible){
            console.log("IsLogged In Details :-- "+isLogedIn);
            console.log("className :-- "+className);
            console.log("logeedInAuthToken "+JSON.stringify(logeedInAuthToken));
        
            getListOfStudentByClass(logeedInAuthToken,className)
                .then(result => {
                    console.log(" School Live Classes Details :- "+JSON.stringify(result));
                    setLiveStudentList(result.data);
                    abortController.abort();
                })
        
      }}, [isLogedIn,logeedInAuthToken ,isStudentTabVisible]);
  return  (
    <div>
    {!isLogedIn ?
        <div> Please Login </div> 
        :
    <div style={props.dispLayValue()}>
        <h2> STUDENTS INFORMATION </h2>
        {/* <div>Student-List</div> */}
        
        <StudentList liveStudentList={liveStudentList}  setLiveStudentList={setLiveStudentList}/>
    </div>
    }
    </div>
  )
}
