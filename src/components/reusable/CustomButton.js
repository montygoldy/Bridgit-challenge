import React from "react";

// Lib
import Button from '@material-ui/core/Button';

const CustomButton = ({ hasIcon, icon, onClick, onKeyPress, text, disabled }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      className="custom-button"
      startIcon={hasIcon && icon}
      onClick={onClick}
      onKeyPress={onKeyPress}
      disabled={disabled}
      size="large"
    >
      {text}
    </Button>
  );
}

export default CustomButton;
