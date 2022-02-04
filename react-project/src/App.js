import './App.css';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

// import GenerateList from './GenerateList.js';
// import MessageForm from './MessageForm.js';


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
      <div className="App-home">
        Welcome to our chat!
      </div>
    </ThemeProvider>
  );
}

export default App;


