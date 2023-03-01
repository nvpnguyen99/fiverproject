import './App.css';
import { Router, Switch } from 'react-router-dom';
import './assets/css/main.css'

import { createBrowserHistory } from 'history';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" component={Home} />

        <HomeTemplate path="/" component={Home} />
      </Switch>
    </Router>




  );
}

export default App;
