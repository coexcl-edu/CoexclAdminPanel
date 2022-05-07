import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { callforLgoing } from '../../api/schoolLoginApi';
import { AppContext } from '../../context/AppContext';
import MainDrawer from '../main/MainDrawer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'


const theme = createTheme();

export default function SignIn() {

    const [schoolId , setSchoolId] = React.useState("");
    const [schoolPassword,setSchoolPassword] = React.useState("");
    const [alertSwitch,setalertSwitch] = React.useState(false);
    
    const vertical = 'top', horizontal = 'center';

  
    const {setNotificationList,setLiveStudentList,setIsLiveClassesTabVisible,loogedInSchoolDetails , setLoggedInSchoolDetails,selectedTab , SetselectedTab ,isLogedIn , setIsLogedIn ,isHomeTabVisible , setIsHomeTabVisible,isStudentTabVisible, setIsStudentTabVisible ,isLoginTabVisible,setIsLoginTabVisible ,logedInDetails ,setLogedIngDetails ,logeedInAuthToken, setLoggedInAuthToken}= React.useContext(AppContext);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        schoolId: data.get('email'),
        schoolPassword: data.get('password'),
    });

    console.log("Login called :-->");
      if(data.get('email') !== "" && data.get('password') !== ""){
          callforLgoing(data.get('email'), data.get('password'))
                  .then(result => {
                    //   console.log(" School got loged in :- "+JSON.stringify(result));
                    //   console.log(`TokenDetails ${result.token}` );
                      
                      let token = result.token
                      if(token) {
                        setalertSwitch(false)
                        setLoggedInAuthToken(result.token);
                        setLoggedInSchoolDetails(result.school);
                        setIsLogedIn(true);
                        SetselectedTab("Home");
    
                        setIsHomeTabVisible(true);
                        setIsStudentTabVisible(false);
                        setIsLoginTabVisible(false);
                        setIsLiveClassesTabVisible(false);
                    } else {
                        setalertSwitch(true)
                    }
                      //If we add new Tab Her need to update its value
                  })
      }  

  };

  return (
   
 
 <div>  

{isLogedIn ? 
    <div> 
         <MainDrawer/>
    </div> 
        :

    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
              padding: '200px' ,
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/coexclapi.appspot.com/o/coexcl_main.png?alt=media&token=b4a421ae-743c-4145-8675-fa3cdf05f375)',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="School Code"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

                <div>
                {alertSwitch ?
                 <Alert    severity="error" sx={{ width: '100%' }}>
                 Login failed, Incorrect Username/password!
                </Alert> : <div></div>
                }
                </div>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
}
    </div>
  );
}