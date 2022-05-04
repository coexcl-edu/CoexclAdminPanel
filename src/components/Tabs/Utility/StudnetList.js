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



export default function StudentList(props) {

  const {datAndTimePicker, onchangeDateAndTimePicker,className, setClassName ,subject, setSubject ,liveClassTabsValue, setLiveClassTabsValue} =React.useContext(AppContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  
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

    
  return (
    <Box display="flex" sx={{ width: '100%', bgcolor: 'background.paper', marginTop:"10px" }}>
      <Box flexGrow={1}  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <BasicSelect setClassName={setClassName}></BasicSelect>
      <Paper style={{maxHeight: 500, overflow: 'auto'}}>
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
                <StudentDetails liveStudent={props.liveStudentList[selectedIndex]}/>
            </div>
        </div> 
    :null}
    </div>

    <div>
    {props.liveStudentList && props.liveStudentList.length?
        <div >
            <div>
            <Button sx={{ margin:"20px" }} color="error" variant="outlined" onClick={handleClickOpen}>Remove From School</Button>
            </div>
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

