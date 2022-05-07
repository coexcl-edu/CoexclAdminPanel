import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function parseDate(value) {
  let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(value)
  console.log(date)
  return date;
}


const handleOpen = (event)=>{
    const newWindow = window.open(event.target.value, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
} 

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function LiveClassesList(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Live Classes List</caption>
        <TableHead>
          <TableRow>
            <TableCell align="center">Class</TableCell>
            <TableCell align="center">Subject&nbsp;</TableCell>
            <TableCell align="center">Topic&nbsp;</TableCell>
            <TableCell align="center">DateTime&nbsp;</TableCell>
            <TableCell  align="center">Duration&nbsp;(minute)</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">VideoMeetUrl&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.liveClassesList.map((row) => (
            <TableRow key={row.schoolCode}>
              <TableCell align="center">Class {row.class}th</TableCell>
              <TableCell align="center">{row.subject}</TableCell>
              <TableCell align="center">{row.topic}</TableCell>
              <TableCell  sx={{ maxWidth: 250 }} align="center" >{row.startTime?  parseDate(row.startTime)  : "Date not Available"}</TableCell>
              <TableCell align="center">{row.duration}</TableCell>
              <TableCell sx={{ maxWidth: 250 }}  align="left">{row.description}</TableCell>
              <TableCell align="center"><Button  variant="contained" color='success' onClick={handleOpen} value={row.videoMeetUrl} >Start Class</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

