import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

export default function Input(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: props.width },
      }}
      noValidate
      autoComplete="off"
    >
         <TextField id="filled-basic" onChange={props.onChange} disabled={props.disabled} value={props.value} label={props.label} variant="filled" />
    </Box>
  );
}
