import React from "react";

// Lib
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      decimalScale={2}
    />
  );
}

const CustomInput = ({ hasIcon, icon, value, handleOnChange, label, placeholder, name, required, isNumberFormat }) => {

  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      name={name}
      placeholder={placeholder}
      label={label}
      id={label}
      value={value || ""}
      onChange={handleOnChange}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={
        isNumberFormat 
        ? 
        { 
          startAdornment: hasIcon && <InputAdornment position="start">{icon}</InputAdornment>,
          inputComponent: NumberFormatCustom
        } 
        : 
        {
          startAdornment: hasIcon && <InputAdornment position="start">{icon}</InputAdornment>
        }
      }
      variant="outlined"
    />
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
