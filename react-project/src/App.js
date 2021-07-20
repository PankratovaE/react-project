import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [ messageList, setMessageList ] = useState([]);
  const [ value, setValue ] = useState('');
  const [ valueText, setValueText] = useState('');
  

  useEffect(() => {
    setValue('Robot');
    setMessageList ([{author: 'Robot', text: "Let's talk!"}])
  }, [])

  useEffect(() => {
    if (value !== 'Robot') {
          setValue('Robot');
     const robotAnswer = setTimeout(() => {
      setMessageList ([...messageList, { author: 'Robot', text: 'Good message!'}])
  }, 1500) 

    }
  }, [ messageList ])

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <form className="form">
            <div>{ messageList.map((n, index) => <div key={ index }>{ n.author }:  { n.text } </div>) }</div>
            
            Name: <input className="form__input" type="text-area" value={ value } onChange={ handleValue } />
            Text: <input className="form__input" type="text-area" value={ valueText } onChange={ handleValueText } />
            <button className="form__button" type="submit" onClick={ handleSubmit }>Send my message</button>
            
        </form>
      </header>
    </div>
  );
}

export default App;

