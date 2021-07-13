import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home work#1
        </p>
      <Message text1="My react-component" text2="I already installed the extension react devtools" />
      </header>
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p className="text1">{ props.text1 }</p>
      <p className="text2">{ props.text2 }</p>
    </div>
  )
}
export default App;
