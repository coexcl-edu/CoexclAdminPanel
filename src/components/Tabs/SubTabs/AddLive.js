import React from 'react'
import LiveClassesSubTabs from './LiveClassesSubTabs'
import SubjectSelect from '../../DropDown/SubjectSelect';
import { Button } from '@mui/material';
import DateTimePicker from 'react-datetime-picker';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicSelect from '../../DropDown/BasicSelect';
import { AppContext } from '../../../context/AppContext';

export default function AddLive(props) {
    const {datAndTimePicker, onchangeDateAndTimePicker,className, setClassName ,subject, setSubject ,liveClassTabsValue, setLiveClassTabsValue ,topic ,setTopic,duration ,setDuration ,teacherName ,setTeacherName ,description ,setDescription ,meetingUrl ,setMeetingUrl ,liveClassDateValue ,setLiveClassDateValue} = React.useContext(AppContext);
  
    const onUrlChange = (event)=>{
        //alert(event.target.value);
        setMeetingUrl(event.target.value);
    }
    const onTopicChange = (event)=>{
        //alert(event.target.value);
        setTopic(event.target.value);
    }
    const onTeacherNameChange = (event)=>{
        //alert(event.target.value);
        setTeacherName(event.target.value);
    }
    const onDurationChange = (event)=>{
        //alert(event.target.value);
        setDuration(event.target.value);
    }
    const onDescriptionChange=(event)=>{
        //alert(event.target.value);
        setDescription(event.target.value);

    }
    const onDateupdated=(event)=>{
        //alert(event.target.value);
        setLiveClassDateValue(event.target.value);

        console.log("data - "+event.target.value);
    }

  
    return (
    <div style={props.dynamicDisplayStyleForLiveAddNew()}>
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
                <TextField fullWidth label="Topic" id="Topic"  type="text" onChange={onTopicChange} />
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
                <TextField fullWidth label="Live Url" id="url" onChange={onUrlChange} type="text" />
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
                <TextField fullWidth label="Teacher Name" id="teacherName" onChange={onTeacherNameChange} type="text" />
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
                <TextField fullWidth label="Duration" id="duration" onChange={onDurationChange} type="number" />
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
                id="datetime-local"
                label="Start Time"
                type="datetime-local"
                onChange={onDateupdated}
                defaultValue='2017-05-24T10:30'
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
                <TextField fullWidth label="Description" id="description" onChange={onDescriptionChange} type="text" />
            </Box>
            </div>

            <Box sx={{ height:'20px'}}></Box>
                <Box 
                sx={{
                    width: 400,
                    maxWidth: '100%',
                }}
                >
            <Button style={{marginLeft:'200px'}} variant="contained" size="large" onClick={props.saveLiveClassesDetail}>Save Details</Button> </Box>

           
        </div>
  )
}
