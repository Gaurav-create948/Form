import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormContext from '../Global/context'
import { useContext } from 'react'

export default function Contact() {
  const {userDetails, setUserDetails} = useContext(FormContext);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserDetails(prevValue => {
      if(name == "Email"){
        return{
          FirstName : prevValue.FirstName,
          LastName : prevValue.LastName,
          Email : value,
          Phone : prevValue.Phone
        }
      }
      else if(name == "Phone"){
        return{
          FirstName : prevValue.FirstName,
          LastName : prevValue.LastName,
          Email : prevValue.Email,
          Phone : value
        }
      }
    })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="cardName"
            label="Email"
            name="Email"
            value={userDetails.Email}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cardNumber"
            label="Phone"
            name="Phone"
            value={userDetails.Phone}
            onChange={handleChange}
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}