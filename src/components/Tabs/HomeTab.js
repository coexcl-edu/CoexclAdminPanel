import React from 'react'
import { AppContext } from '../../context/AppContext'
import HomeCard from './SubTabs/HomeCard';

export default function HomeTab(props) {
    const {selectedTab , SetselectedTab ,isLogedIn , setIsLogedIn ,isHomeTabVisible , setIsHomeTabVisible,isStudentTabVisible, setIsStudentTabVisible ,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,logeedInAuthToken, setLoggedInAuthToken,loogedInSchoolDetails , setLoggedInSchoolDetails} = React.useContext(AppContext);
  return (
    <div style={props.dispLayValue()}>
    {isLogedIn ? 
        <div>
            <div>
                <HomeCard></HomeCard>
            </div>
        </div> 
    :null}
    </div>
  )
}
