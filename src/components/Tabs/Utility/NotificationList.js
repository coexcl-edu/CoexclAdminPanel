import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/base/TextareaAutosize';


export default function NotificationList(props) {

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Notification List</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Title&nbsp;</TableCell>
            <TableCell align="right">Notice&nbsp;</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
            <TableCell align="right">Image-URL&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.notificationList.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="right">Class {row.class}th</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">
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
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                  {/* {row.imageurl} */}
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="N/A"
                    defaultValue={row.imageurl}
                    style={{ width: 300 }}
                    readonly
                    />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

