import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
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
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Subject&nbsp;</TableCell>
            <TableCell align="right">Topic&nbsp;</TableCell>
            <TableCell align="right">VideoMeetUrl&nbsp;</TableCell>
            <TableCell align="right">Duration&nbsp;(minute)</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.liveClassesList.map((row) => (
            <TableRow key={row.schoolCode}>
              <TableCell align="right">Class {row.class}th</TableCell>
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.topic}</TableCell>
              <TableCell align="right">{row.videoMeetUrl}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

