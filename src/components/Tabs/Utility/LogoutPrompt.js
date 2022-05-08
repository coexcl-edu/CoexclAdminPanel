import * as React from 'react';
import Button from '@mui/material/Button';
import { AppContext } from '../../../context/AppContext';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { calllogout} from '../../../api/schoolLoginApi';



export default function LogoutPrompt (props) {

  let open = props.logoutPromptOpen;

  const {logeedInAuthToken} = React.useContext(AppContext);


  const logoutCurrentSchool = () =>{
    let abortController = new AbortController();
    calllogout(logeedInAuthToken)
    .then(result => {
        console.log(" School logout :- "+JSON.stringify(result));
        props.setLiveStudentList(result.data);
        abortController.abort();
    })
    props.logoutCurrentSchool()
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
      <Button onClick={logoutCurrentSchool} autoFocus>
        Logout
      </Button>
    </DialogActions>
  </Dialog>

  );
}
