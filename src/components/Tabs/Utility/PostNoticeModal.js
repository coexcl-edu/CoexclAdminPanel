import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppContext } from '../../../context/AppContext';
import TextField from '@mui/material/TextField';
import { saveNotification ,getNotificationList } from '../../../api/notificationApi';
import BasicSelect from '../../DropDown/BasicSelect';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height:400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 4,
  p: 4,
};

export default function PostNoticeModal() {
  //const [open, setOpen] = React.useState(false);
  const {openModal, setOpenModal ,logeedInAuthToken ,setNotificationList} = React.useContext(AppContext);
  const [title,setTitle] = React.useState("");
  const [description,setDescription] = React.useState("");
  const [referenceUrl,setReferenceUrl] = React.useState("");
  const [className,setClassName] = React.useState(6);
  const [postedBy,setPostedBy] = React.useState("")

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
      setOpenModal(false);
      setTitle("");
      setDescription("");
      setReferenceUrl("");
      setPostedBy("");

    }
  const onChangeInputValue =(event)=>{
    console.log(event.target.id);
    const idType=event.target.id;

    if(idType==="t"){
        setTitle(event.target.value);
    }else if(idType==="d"){
        setDescription(event.target.value);
    }else if(idType==="r"){
        setReferenceUrl(event.target.value)
    }

  }
  const saveNoticeDetails = () =>{
   
    console.log(title,description,referenceUrl,className);
    if(title!=="" && description !=="" && referenceUrl !=="" ){
        //gonna make a network call title,description,referenceUrl,postedBy,logeedInAuthToken
        console.log(className)
        saveNotification(title,description,referenceUrl,className,logeedInAuthToken).then(result =>{
            console.log(JSON.stringify(result));
            alert("Notice got saved ");
            getNotificationList(logeedInAuthToken)
            .then(result => {
                console.log(" Notification Details :- "+JSON.stringify(result));
                setNotificationList(result.data);
                handleClose();
                
            })

        })
    }else {
        alert("please enter all the field value");
    }
    }
  return (
    <div>
      <Button  variant="contained"  onClick={handleOpen}>+ POST NOTICE</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post Notice
          </Typography>

          <Typography id="modal-modal-description" >
          
            <div>
                <Box 
                sx={{
                    height:20,
                    maxHeight:'50%',
                    width: 400,
                    maxWidth: '100%',
                }}
                >   <div>
                        <BasicSelect setClassName={setClassName} ></BasicSelect>
                    </div>
                    <Box sx={{ height:'6px'}}></Box>
                    <TextField fullWidth label="Title" id="t" onChange={onChangeInputValue} type="text"  />
                    <Box sx={{ height:'6px'}}></Box>
                    <TextField fullWidth label="Notice" id="d" onChange={onChangeInputValue} type="text"  />
                    <Box sx={{ height:'6px'}}></Box>
                    <TextField fullWidth label="Image/Video Url" id="r" onChange={onChangeInputValue} type="text"  />
                    <Box sx={{ height:'15px'}}></Box>
                    <div id="saveNotice"><Button   variant="contained"  onClick={saveNoticeDetails}>Save</Button></div>
                </Box>
                
            </div>
            
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}
