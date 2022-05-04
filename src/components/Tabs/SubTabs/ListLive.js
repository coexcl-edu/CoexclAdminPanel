import React from 'react'
import { useEffect ,useContext, useState} from 'react';
import { AppContext } from '../../../context/AppContext';
import { getListOfliveClasses } from '../../../api/liveClassesApi';
import LiveClassesList from '../Utility/LiveClassesList';

export default function ListLive(props) {
    const {logeedInAuthToken,isLogedIn ,liveClassesList,setLiveClassesList ,isLiveClassesTabVisible} = useContext(AppContext);
    useEffect(() => {
        let abortController = new AbortController(); 
        if(isLogedIn && isLiveClassesTabVisible){
            console.log("IsLogged In Details :-- "+isLogedIn);
            console.log("logeedInAuthToken "+JSON.stringify(logeedInAuthToken));
        
        getListOfliveClasses(logeedInAuthToken)
                .then(result => {
                    console.log(" School Live Classes Details :- "+JSON.stringify(result));
                    setLiveClassesList(result.data);
                    abortController.abort();
                })
        
      }}, [isLogedIn,logeedInAuthToken,isLiveClassesTabVisible]);
  return (
    <div style={props.dynamicDisplayStyleForLiveList()} >
       <LiveClassesList liveClassesList={liveClassesList} />
    </div>
  )
}
