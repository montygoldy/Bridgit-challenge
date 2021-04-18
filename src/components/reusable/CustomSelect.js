import React from "react";

// Lib
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const CustomSelect = ({ value, handleOnChange, label, placeholder, selectOptions, name, displayEmpty }) => {

  const classes = useStyles();
 
  return (
    <FormControl variant="outlined" className={`${classes.formControl} text-field`}>
      {
        label
        &&
        <InputLabel shrink id={label}>{label}</InputLabel>
      }

      <Select
        displayEmpty={displayEmpty}
        className={`${classes.input} custom-select`}
        name={name}
        placeholder={placeholder}
        label={label}
        id={label}
        value={value || ""}
        onChange={handleOnChange}
      >
        {
          placeholder
          &&
          <MenuItem className={`${classes.menuItem} placeholder-item`} value="">
            {placeholder}
          </MenuItem>
        }
        { 
          (selectOptions && selectOptions.length >= 1)
          &&
          selectOptions.map((option) => (
            <MenuItem className={classes.menuItem} key={option} value={option}>
              {option}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  menuItem: {
    textTransform: 'capitalize',
    fontSize: 14
  }
}));

export default CustomSelect;
