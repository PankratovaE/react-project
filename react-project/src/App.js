import './App.css';
import { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GenerateList from './GenerateList.js';

const styles = {
  root: {
    background: "",
  },
  input: {
    color: "white",
    borderBottom: '1px solid white'
  },
};

const App = (props) => {

  const timer = useRef(null);

  const [ messageList, setMessageList ] = useState([]);
  const [ value, setValue ] = useState('');
  const [ valueText, setValueText] = useState('');

  const { classes } = props;

  const inputRef = useRef(null);
   
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff", 
      },
    },
    typography: {
      fontSize: 22,
    },
  });
   
  useEffect(() => {
    setMessageList ([{author: 'Robot', text: "Let's talk!"}]);

   }, []);

  useEffect(() => {

    if (messageList.length && messageList[messageList.length-1].author !== 'Robot') {
        timer.current = setTimeout(() => {
        setMessageList ([...messageList, { author: 'Robot', text: 'Good message!'}]);
        inputRef.current?.focus();
        setValue('');
        setValueText('');

      }, 1500);

    }
  }, [ messageList ]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    }
  }, []);


  const handleValue = (event) => {
    setValue(event.target.value)
    
  }
  const handleValueText = (event) => {
    setValueText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessageList ([...messageList, {author: value, text: valueText } ])
  }

  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <header className="App-header">
          <div className="chat-page">
            <div className="chat-list">Chat's list
              <GenerateList />
            </div>
            <div className="chat-form">
              <div className="chat-message">{ messageList.map((mes, index) => <div key={ index }>{ mes.author }:  { mes.text } </div>) }</div>
              <form className="form">
              
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
                onClick={ handleSubmit }
              >Send my message</button>
              
          </form>
            </div>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);


