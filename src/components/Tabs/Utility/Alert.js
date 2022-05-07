import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlert(props) {
  return (
     <div style={props.displayValueForAlert()}>
    <Stack sx={{ width: '100%'}} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a success alert — please check the list!
      </Alert>
    </Stack>
    </div>
  );
}
