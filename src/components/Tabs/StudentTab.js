import React from 'react'
import { useEffect ,useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { getListOfStudent } from '../../api/studentApi';
import StudentList from './Utility/StudnetList';

export default function StudentTab(props) {

    const {logeedInAuthToken,isLogedIn ,liveStudentList,setLiveStudentList,isStudentTabVisible} = useContext(AppContext);
    useEffect(() => {
        let abortController = new AbortController();
        if(isLogedIn && isStudentTabVisible){
            console.log("IsLogged In Details :-- "+isLogedIn);
            console.log("logeedInAuthToken "+JSON.stringify(logeedInAuthToken));
        
            getListOfStudent(logeedInAuthToken)
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
        <h4> STUDENTS INFORMATION </h4>
        {/* <div>Student-List</div> */}
        
        <StudentList liveStudentList={liveStudentList} />
    </div>
    }
    </div>
  )
}
