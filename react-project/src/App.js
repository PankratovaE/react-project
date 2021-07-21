import './App.css';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import GenerateList from './GenerateList.js';
import MessageForm from './MessageForm.js';


const App = () => {

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
 
  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <header className="App-header">
          <div className="chat-page">
            <div className="chat-list">Chat's list
              <GenerateList />
            </div>
            <MessageForm />
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;


