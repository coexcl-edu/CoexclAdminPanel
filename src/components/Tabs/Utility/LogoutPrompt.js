import * as React from 'react';
import Button from '@mui/material/Button';
import { AppContext } from '../../../context/AppContext';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function LogoutPrompt (props) {

  let open = props.logoutPromptOpen;

  const {setIsLogedIn,setNotificationList, setLoggedInAuthToken , setLoggedInSchoolDetails, setLiveStudentList} = React.useContext(AppContext);
  const [logoutPromptOpen, setLogoutPromptOpen] = React.useState(false);


  const logoutCurrentSchool = () =>{
    setLoggedInAuthToken("");
    setLoggedInSchoolDetails({});
    setIsLogedIn(false);
    setLiveStudentList([]);
    setNotificationList([]);
  }

    
  return (

    <Dialog
    open={props.logoutPromptOpen}
    onClose={props.handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
       Logout
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
       Are you sure you want to log out?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose}>Cancel</Button>
      <Button onClick={props.logoutCurrentSchool} autoFocus>
        Logout
      </Button>
    </DialogActions>
  </Dialog>

  );
}
