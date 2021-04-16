import React from "react";

// Lib
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const CustomInput = ({ hasIcon, icon, value, handleOnChange, label, placeholder, isSelect, selectOptions, disabled }) => {

  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      name={label}
      placeholder={placeholder}
      label={label}
      id={label}
      defaultValue={value}
      onChange={handleOnChange}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ 
        startAdornment: hasIcon && <InputAdornment position="start">{icon}</InputAdornment>
      }}
      variant="outlined"
      select={isSelect}
      SelectProps={{
        native: true,
      }}
    >
      {
        (isSelect && selectOptions && selectOptions.length)
        &&
        selectOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))
      }
    </TextField>
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    fontSize: 16,
    // paddingTop: 16.5,
    // paddingBottom: 16.5
  }
}));

export default CustomInput;
