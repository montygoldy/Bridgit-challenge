import React from "react";

// Lib
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const CustomButton = ({ hasIcon, icon, onClick, onKeyPress, text, disabled }) => {

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
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

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: 16,
    fontWeight: 600,
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
}));

export default CustomButton;
