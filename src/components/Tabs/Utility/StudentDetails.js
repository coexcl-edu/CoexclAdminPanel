import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';


export default function StudentDetails(props) {
      
    const style2 =  {
        position: 'absolute',
        top: 0,
        bottom: 0,
        marginLeft:'5%',
        width: '100%',
        overflow : 'auto'
      }

    const student = props.liveStudent;
    let personalInfo = student.personalInfo ? student.personalInfo : "";
    let quizInfoInfo = student.quizInfo ? student.quizInfo : "";
    let academicsInfo = student.academics ? student.academics : "";

    let name = student.name ? student.name : "";
    let email = student.email ? student.email : "";
    let mobile = student.mobile ? student.mobile : "";

    let className = academicsInfo.class ? academicsInfo.class : "";
    let favouriteSubject = academicsInfo.favouriteSubject ? academicsInfo.favouriteSubject : "";

    let gender = personalInfo.gender ? personalInfo.gender : "";
    let fatherName = personalInfo.fatherName ? personalInfo.fatherName : "";
    let motherName = personalInfo.motherName ? personalInfo.motherName : "";
    let parentNumber = personalInfo.parentContact ? personalInfo.parentContact : "";
    let favouriteSport = personalInfo.favouriteSport ? personalInfo.favouriteSport : "";

    let quizScore = quizInfoInfo.percent ? quizInfoInfo.percent.toFixed(1) : "";

    return (
          
        // <Box flexGrow={2} sx={{ width: '100%', maxWidth: 600, maxHeight: 600, bgcolor: 'background.paper', marginLeft:'50px', overflow: 'auto'}}>
             <Box sx={style2}>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{  width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Name" id="Name"  type="text" value={name}></TextField>
            </Box>
        
            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Mobile" id="Mobile"  type="text"  value={mobile}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Email" id="Email"  type="text" value={email}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Class" id="Class"  type="text" value={className}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Gender" id="Gender"  type="text" value={gender}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Quiz Score(%)" id="quizScore"  type="text" value={quizScore}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Favourite Subject" id="f_subject"  type="text" value={favouriteSubject}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Favourite Sports" id="f_sports"  type="text" value={favouriteSport}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Father Name" id="Parent"  type="text" value={fatherName}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Parent Number" id="ParentNumber"  type="text" value={parentNumber}/>
            </Box>

            <Box sx={{ height:'20px'}}></Box>
                <Box sx={{width: "40%", maxWidth: '100%'}}>
                <TextField fullWidth label="Mother Name" id="MotherName"  type="text" value={motherName}/>
            </Box>
            <Box sx={{ height:'30px'}}></Box>
        </Box>
        
        
      );
}
