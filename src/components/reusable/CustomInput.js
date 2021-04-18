import React from "react";

// Lib
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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

  return (
    <TextField
      className="text-field"
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

export default CustomInput;
