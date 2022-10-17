import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import FormContext from '../Global/context';
import { useContext } from 'react'

export default function Review() {
  const{userDetails} = useContext(FormContext);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            First Name : {userDetails.FirstName}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Last Name : {userDetails.LastName}
          </Typography>
        </Grid>

        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Email : {userDetails.Email}
          </Typography>
        </Grid>

        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Phone : {userDetails.Phone}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}