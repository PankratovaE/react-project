import './App.css';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';


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

  const { name, age } = useSelector(state => state.profile)
 
  return (
    <ThemeProvider theme={ theme }>
      <div className="App-home">
        { name }, welcome to our chat!
      </div>
    </ThemeProvider>
  );
}

export default App;


