import React from 'react'
import { FormControlUnstyled } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { callforLgoing } from '../../api/schoolLoginApi';
import { AppContext } from '../../context/AppContext';

export default function LoginTab(props) {
  const [schoolId , setSchoolId] = React.useState("");
  const [schoolPassword,setSchoolPassword] = React.useState("");
  //const [logeedInAuthToken, setLoggedInAuthToken] = React.useState("");

  const {setNotificationList,setLiveStudentList,setIsLiveClassesTabVisible,loogedInSchoolDetails , setLoggedInSchoolDetails,selectedTab , SetselectedTab ,isLogedIn , setIsLogedIn ,isHomeTabVisible , setIsHomeTabVisible,isStudentTabVisible, setIsStudentTabVisible ,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,logeedInAuthToken, setLoggedInAuthToken}= React.useContext(AppContext);

  const onSchoolCodeChange = (event)=>{
      const schoolId = event.currentTarget.value; 
    console.log(schoolId); 
    setSchoolId(schoolId);
  }
  const onSchoolPasswordFieldChange = (event)=>{
      const schoolPassword = event.currentTarget.value;
    console.log(schoolPassword); 
    setSchoolPassword(schoolPassword);
  }
  const Login =()=> {
    console.log("Login called :-->");
    if(schoolId !== "" && schoolPassword !== ""){
        callforLgoing(schoolId,schoolPassword)
                .then(result => {
                    console.log(" School got loged in :- "+JSON.stringify(result));
                    console.log(`TokenDetails ${result.token}` );
                    setLoggedInAuthToken(result.token);
                    setLoggedInSchoolDetails(result.school);
                    setIsLogedIn(true);
                    SetselectedTab("Home");

                    setIsHomeTabVisible(true);
                    setIsStudentTabVisible(false);
                    setIsLoginTabVisible(false);
                    setIsLiveClassesTabVisible(false);
                    //If we add new Tab Her need to update its value
                })
    }  
  }

  const logoutCurrentSchool = () =>{
    setLoggedInAuthToken("");
    setLoggedInSchoolDetails({});
    setIsLogedIn(false);
    setLiveStudentList([]);
    setNotificationList([]);

  }
  return (
  
    <div style={props.dispLayValue()}>
       <div style={{width:'95%'}}>{isLogedIn ?<h4>{loogedInSchoolDetails.schoolname}</h4> :<h4>LOGIN</h4>}</div>
        {isLogedIn ? 
        <div> 
            {/* <h4>{loogedInSchoolDetails.schoolname}</h4> */}
            {/* <div>{loogedInSchoolDetails.schoolname}</div> */}
            <div> 
                <Button onClick = {logoutCurrentSchool} variant="contained" size="large" >Logout</Button>
                {/* <button onClick = {logoutCurrentSchool}>Logout</button> */}
            </div>
        </div> :
        <div>
        <Box style={{marginLeft:'400px'}}>
            <Box 
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
            >
            <TextField fullWidth label="school-code" id="schoolcode" onChange={onSchoolCodeChange} />
            </Box>
            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="password" id="password"  type="password" onChange={onSchoolPasswordFieldChange}/>
            </Box>
            <Box sx={{ height:'20px'}}> </Box>
                <Button style={{marginLeft:'200px'}} variant="contained" size="large" onClick={Login}>Login</Button>
            
            
        </Box>
        </div>
        }
    </div>
  )
}
