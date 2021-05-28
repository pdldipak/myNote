import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './app.styled.js';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
