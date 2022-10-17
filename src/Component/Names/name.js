import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormContext from '../Global/context'
import { useContext } from 'react'


export default function Name() {
  const {userDetails, setUserDetails} = useContext(FormContext);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserDetails(prevValue => {
        if(name == "firstName"){
          return{
            FirstName : value,
            LastName : prevValue.LastName,
            Email : prevValue.Email,
            Phone : prevValue.Phone
          }
        }
        else if(name === "lastName"){
          return{
            FirstName : prevValue.FirstName,
            LastName : value,
            Email : prevValue.Email,
            Phone : prevValue.Phone
          }
      }
    })
  }
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Name 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={userDetails.FName}
            onChange={handleChange}
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            value={userDetails.LName}
            onChange={handleChange}
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}