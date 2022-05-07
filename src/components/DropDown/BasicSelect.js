import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [classValue, setClassValue] = React.useState(6);

  const handleChange = (event) => {
    setClassValue(event.target.value);
    props.setClassName(event.target.value);
  };

  return (
    <>
    <Box sx={{ height:'20px'}}></Box>
    <Box sx={{ minWidth: 120 
    ,width: 400,
    maxWidth: '100%'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={classValue}
          label="Class"
          onChange={handleChange}
        >
          <MenuItem value={6}>Class 6</MenuItem>
          <MenuItem value={7}>Class 7</MenuItem>
          <MenuItem value={8}>Class 8</MenuItem>
          <MenuItem value={9}>Class 9</MenuItem>
          <MenuItem value={10}>Class 10</MenuItem>
          <MenuItem value={11}>Class 11</MenuItem>
          <MenuItem value={12}>Class 12</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  );
}
