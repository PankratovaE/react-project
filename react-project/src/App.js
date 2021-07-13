import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {

  const [ messageList, setMessageList ] = useState([]);
  
  const [valueText, setValueText] = useState('');
  const [isAnswer, setIsAnswer] = useState(false);
  const [valueAuthor, setValueAuthor] = useState('');

  const handleChangeAuthor = (event) => {
    setValueAuthor(event.target.value);
    setIsAnswer(false);
  };
  
  const handleChangeText = (event) => {
    setValueText(event.target.value);
    setIsAnswer(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let messages = Object.assign(messageList);
    messages.push({author: valueAuthor, text: valueText});

    setMessageList(messages);

    setTimeout(() => {
      setIsAnswer(true);
    }, 1500);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          { messageList.map((message, index) => <div key={ index }> { message.author }:  { message.text } </div> )}
        </div>
        <form className="form">
            Author: <input className="form__input" type="text" value={ valueAuthor } onChange={ handleChangeAuthor }/>
            Text: <input className="form__input" type="text-area" value={ valueText } onChange={ handleChangeText } />
            <button className="form__button" type="submit" onClick={ handleSubmit }>Send my message</button>
            { isAnswer && <p>Succes!</p> }
        </form>
      </header>
    </div>
  );
}

