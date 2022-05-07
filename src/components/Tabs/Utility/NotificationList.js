import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';



function parseDate(value) {
  let date = ""
  try {
    let formatDate = new Date(String(value))
    date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(formatDate)
  } catch (error) {
    console.log(error)
  }
  return String(date);
}

const handleOpen = (event)=>{
  const newWindow = window.open(event.target.value, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
} 

export default function NotificationList(props) {

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Showing Last 10 Notices</caption>
        <TableHead>
          <TableRow>
            <TableCell align="center">Class</TableCell>
            <TableCell align="center">Title&nbsp;</TableCell>
            <TableCell align="center">Notice&nbsp;</TableCell>
            <TableCell align="center">Date&nbsp;</TableCell>
            <TableCell align="center">Image/Video URL&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.notificationList.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="center">Class {row.class}th</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">
                  {/* {row.notice} */}
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue={row.notice}
                    style={{ width: 300 }}
                    readonly
                    />
              </TableCell>
              <TableCell align="center">{row.date?  parseDate(row.date)  : "Date not Available"}</TableCell>
              <TableCell align="center">
                  {/* {row.imageurl} */}
                  {/* <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="N/A"
                    defaultValue={row.imageurl}
                    style={{ width: 300 }}
                    readonly
                    /> */}
                    <Button  variant="contained" color='success' onClick={handleOpen} value={row.imageurl} >Open Reference</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

