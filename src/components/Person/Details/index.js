import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function PersonDeatils(props) {
  const [name, setName] = useState(props.name);
  const [gender, setGender] = useState(props.gender);

  // Formik will eventually handle this
  function handleNameChange(event) {
    // props.onNameChange
    setName(event.target.value);
  }

  function handleGenderChange(event) {
    // props.onGenderChange
    setGender(event.target.value);
  }

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleNameChange}
        margin="normal"
        variant="outlined"
      />
      <Select value={gender} onChange={handleGenderChange} input={<OutlinedInput name="gender" />}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'male'}>Male</MenuItem>
        <MenuItem value={'female'}>Female</MenuItem>
        <MenuItem value={'unknown'}>Unknown</MenuItem>
      </Select>
    </form>
  );
}

export default PersonDeatils;
