import './App.css';
import { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: "",
  },
  input: {
    color: "black",
    borderBottom: '1px solid white'
  },
};

const MessageForm = (props) => {
  const { onSubmit } = props;


  const [ value, setValue ] = useState('');
  const [ valueText, setValueText] = useState('');
  const inputRef = useRef(null);
  const { classes } = props;

  useEffect(() => {
        inputRef.current?.focus();
   }, []);

 

  const handleValue = (event) => {
    setValue(event.target.value)
  }
  
  const handleValueText = (event) => {
    setValueText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (onSubmit) {
      onSubmit(valueText, value)
      setValue('')
      setValueText('')
    }
  }

  return (
      <form className="form" onSubmit={ handleSubmit }>
        <TextField
        autoFocus
        required
        label="Name"
        value={ value }
        onChange={ handleValue }
        className={classes.root}
        InputProps={{
            className: classes.input }}
        inputRef={ inputRef }
        />
        <TextField
        label="Your message"
        multiline maxRows={ 3 }
        value={ valueText }
        onChange={ handleValueText }
        className={classes.root}
        InputProps={{
            className: classes.input }}
        />
        <button
        className="form__button"
        type="submit"
        >Send my message</button>
      </form>
  )

}

export default withStyles(styles)(MessageForm);