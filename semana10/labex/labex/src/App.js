import './App.css';
import Router from './routes/Router'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from './styledGlobal'
import GlobalStyle from './styledGlobal'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
