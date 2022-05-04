import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Box, CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { AppContext } from '../../../context/AppContext';

export default function HomeCard() {
    const {selectedTab , SetselectedTab ,isLogedIn , setIsLogedIn ,isHomeTabVisible , setIsHomeTabVisible,isStudentTabVisible, setIsStudentTabVisible ,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,logeedInAuthToken, setLoggedInAuthToken,loogedInSchoolDetails , setLoggedInSchoolDetails} = React.useContext(AppContext);
  return (
    <Box sx={{ maxWidth:  1500}}>
      
      <Card sx={{ padding:'20px', alignItems:'center', display: 'flex',
                flexDirection: 'column', background: "#FFF7E8" }}>
    
          <Typography gutterBottom variant="h5" component="div" align='center'>
          {loogedInSchoolDetails.schoolname}
          </Typography>
          <Typography variant="body2" align='center' color="text.secondary">
            {loogedInSchoolDetails.city}, {loogedInSchoolDetails.state}
          </Typography>
          <Box sx={{ height:'20px'}}></Box>

          <Box
            component="img"
            sx={{
              height: 350,
              width: 350,
              maxHeight: { xs: 350, md: 250 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="School logo."
            src={loogedInSchoolDetails.logourl}
        />

          </Card>
        
      <Typography
      sx={{ paddingTop:'20px', fontFamily: 'Segoe UI Emoji'}} gutterBottom variant="h5" align='center' color="text.secondary">
      "EDUCATION IS THE MOST POWERFUL TOOL WHICH YOU CAN USE TO CHANGE THE WORLD"
          </Typography>

    </Box>

    
  );
}
