import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SubjectSelect(props) {
  const [subject, setSubject] = React.useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
    props.setSubject(event.target.value);
  };

  return (
    <>
    <Box sx={{ height:'20px'}}></Box>
    <Box sx={{ minWidth: 120 
    ,width: 400,
    maxWidth: '100%'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="Math">Math</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  );
}
