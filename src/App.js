import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid item>
          <NavigationBar />
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
