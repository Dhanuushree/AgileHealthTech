import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import { Grid } from '@mui/material';
import LoginPage from './Component/LoginPage/LoginPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid item>
          <Route exact path="/" component={LoginPage} />
          <Route path="/navigationbar" component={NavigationBar} />
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
