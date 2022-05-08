import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppContext } from '../../../context/AppContext';
import TextField from '@mui/material/TextField';
import { saveLiveClasses ,getListOfliveClasses} from '../../../api/liveClassesApi';
import BasicSelect from '../../DropDown/BasicSelect';
import SubjectSelect from '../../DropDown/SubjectSelect';
import DateTimePicker from 'react-datetime-picker';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height:'80%',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 4,
  p: 4,
};

const MODAL_STYLES = {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "15px",
    zIndex: "1000",
    width: "35%",
    borderRadius: ".5em"
  };
  const OVERLAY_STYLE = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: "90%",
    backgroundColor: "#FFF",
    zIndex: "1000",
    overflowY: "auto",
    padding:'20px'
  };


export default function PostLiveClass() {
  const {openLiveClassModal, setOpenLiveClassModal,logeedInAuthToken , setLiveClassesList, setIsDisplayAlert} = React.useContext(AppContext);
  const [className,setClassName] = React.useState(6);
  const [subject,setSubject] = React.useState("");
  const [meetingUrl,setMeetingUrl] = React.useState("");
  const [topic,setTopic] = React.useState("");
  const [teacherName,setTeacherName] = React.useState("");
  const [duration,setDuration] = React.useState("");
  const [description,setDescription] = React.useState("");
  const [liveClassDateValue,setLiveClassDateValue] = React.useState("");
  
  const handleOpen = () => setOpenLiveClassModal(true);

    function afterSomeTime() {
        setIsDisplayAlert(false);
    }

  const handleClose = () => {
      setOpenLiveClassModal(false);
      setTopic("");
      setMeetingUrl("");
      setTeacherName("");
      setDuration("");
      setLiveClassDateValue("");
      setDescription("");
    }


  const onChangeInputValue =(event)=>{
    console.log(event.target.id);
    const idType=event.target.id;

    if(idType==="topic"){
        setTopic(event.target.value);
    }else if(idType==="url"){
        setMeetingUrl(event.target.value);
    }else if(idType==="teacherName"){
        setTeacherName(event.target.value)
    } else if(idType==="duration"){
        setDuration(event.target.value)
    } else if(idType==="datetime_local"){
        let date = Date.parse(""+event.target.value)
        setLiveClassDateValue(date)
    } else if(idType==="description"){
        setDescription(event.target.value)
    }

  }

  const saveLiveDetails = ()=>{
    console.log(topic, subject, meetingUrl, className,description,teacherName,className, duration, liveClassDateValue);
    if(topic!=="" && subject !=="" && meetingUrl !=="" && className !=="" &&
            description!=="" && teacherName !=="" && className !=="" && liveClassDateValue !=="" ){ 
    
        console.log(liveClassDateValue);   
        console.log(`ClassName : - ${className}`);
        saveLiveClasses(className,subject,topic,teacherName,duration,meetingUrl,description,liveClassDateValue,logeedInAuthToken).then(result =>{
            setIsDisplayAlert(result.status.success);
            setInterval(afterSomeTime, 5000);
            getListOfliveClasses(logeedInAuthToken).then(result=>{
                console.log("liveClasses fetched again ==> ");
                console.log(JSON.stringify(result));
                setLiveClassesList(result.data);
                handleClose();
            })
        })
    }else{
        alert('Please Select all the input');
    }
}


  return (
    <div>
      <Button  variant="contained"  onClick={handleOpen}>+ POST LIVE CLASS</Button>
      <Modal
        open={openLiveClassModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={OVERLAY_STYLE}>
          <Typography id="modal-modal-description" >
          <div>
          <Box sx={{
                    height:200,
                    maxHeight:'50%',
                    width: 400,
                    maxWidth: '100%',
                }}
            > 
            <Typography id="modal-modal-title" variant="h6" component="h2">
                 Post Notice
            </Typography>
            <Box sx={{ height:'10px'}}></Box>
            <div>
                <BasicSelect setClassName={setClassName} ></BasicSelect>
            </div>
            <div name="Subject">
                <SubjectSelect setSubject={setSubject}/>
            </div>
            <div>
            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 400,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Topic" id="topic"  type="text" onChange={onChangeInputValue} />
            </Box>
            </div>
            <div>
            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 400,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Live Url" id="url" onChange={onChangeInputValue} type="text" />
            </Box>
            </div>
            <div name="teacher Name">
            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 400,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Teacher Name" id="teacherName" onChange={onChangeInputValue} type="text" />
            </Box>
            </div>
            <div name=" Duration">
            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 400,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Duration" id="duration" onChange={onChangeInputValue} type="number" />
            </Box>
            </div>
            <div  name="slectTime">
                <Box sx={{ height:'20px'}}></Box>
                    <Box 
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                    >
            <TextField
                id="datetime_local"
                label="Start Time"
                type="datetime-local"
                onChange={onChangeInputValue}
                defaultValue=''
                sx={{ width: 250 }}
                InputLabelProps={{shrink: true,}}/>
                {/* Start Time : <DateTimePicker onChange={onchangeDateAndTimePicker} value={datAndTimePicker} /> */}
                </Box>
            </div>
            
            <div name="description">
            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 400,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Description" id="description" onChange={onChangeInputValue} type="text" />
            </Box>
            </div>

            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 400,
                    maxWidth: '100%',
                }}
                >
            <Button variant="contained" size="large" onClick={saveLiveDetails}>Save</Button> </Box>
            <Box sx={{ height:'20px'}}></Box>
           </Box>
        </div>
            
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}
