import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StudentDetails  from './StudentDetails';
import BasicSelect from '../../DropDown/BasicSelect';
import { AppContext } from '../../../context/AppContext';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getListOfStudent ,getListOfStudentByClass} from '../../../api/studentApi';



export default function StudentList(props) {


  const style1 = {
    position: 'absolute',
    top: '150px',
    bottom: 0,
    width: '25%',
  }

  const style2 =  {
    position: 'absolute',
    top: '150px',
    left: '25%',
    bottom: 0,
    marginLeft:'5%',
    width: '100%',
  }

  const style3 =  {
    position: 'absolute',
    top: '150px',
    left: '75%',
    bottom: 0,
    marginLeft:'5%',
    width: '25%',
  }
  

  const {datAndTimePicker, onchangeDateAndTimePicker,className, setClassName ,subject, setSubject ,liveClassTabsValue, setLiveClassTabsValue ,logeedInAuthToken} =React.useContext(AppContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectClassName  ,setSelectedClassName] =React.useState(6);
  
  const handleListItemClick = (event, index, row ) => {
    setSelectedIndex(index);
    console.log(row)
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  React.useEffect(() => {
    let abortController = new AbortController();
    
        getListOfStudentByClass(logeedInAuthToken,selectClassName)
            .then(result => {
                console.log(" Student Details:- "+JSON.stringify(result));
                props.setLiveStudentList(result.data);
                abortController.abort();
            })
    
  }

  ,[selectClassName]);

    
  return (
    <Box display="flex" sx={{ width: '100%', bgcolor: 'background.paper', marginTop:"10px" }}>
      <Box sx={style1}>
      <BasicSelect setClassName={setClassName} setSelectedClassName={setSelectedClassName}></BasicSelect>
      <Paper style={{height: "85%", overflowY: 'auto'}}>
        <List component="nav" aria-label="main mailbox folders">
            {props.liveStudentList.map((row) => (
              <ListItemButton
                selected={selectedIndex === props.liveStudentList.indexOf(row)}
                onClick={(event) => handleListItemClick(event, props.liveStudentList.indexOf(row), row)}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={row.name} />
              </ListItemButton>
            ))}
        </List>
        </Paper>
      </Box>
      
    <div>
      
    {props.liveStudentList && props.liveStudentList.length? 
        <div >
            <div>
            <Box sx={style2}>
                <StudentDetails liveStudent={props.liveStudentList[selectedIndex]}/>
                </Box>
            </div>
        </div> 
    :null}
    </div>

    <div>
    {props.liveStudentList && props.liveStudentList.length?
        <div >
          <Box sx={style3}>
            <div>
              <Button sx={{ margin:"20px" }} color="error" variant="outlined" onClick={handleClickOpen}>Remove From School</Button>
              </div>
              <div>
              <Button sx={{ marginLeft:"20px" }} disabled="true" color="success" variant="outlined" onClick={handleClickOpen}>Send Message</Button>
            </div>
            </Box>
        </div> 
    :null}
    </div>

    {props.liveStudentList && props.liveStudentList.length?
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
           Remove {props.liveStudentList[selectedIndex].name} from your School?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {props.liveStudentList[selectedIndex].name} will be removed from your school and no longer will able to use 24*7 Doubt solving features.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Don't Remove</Button>
          <Button onClick={handleClose} autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>

      :null}  
        
   
    </Box>

  );
}

