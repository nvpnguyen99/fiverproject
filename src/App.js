import { Router, Switch } from 'react-router-dom';
import './assets/css/main.css'
import { createBrowserHistory } from 'history';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import JobList from './pages/JobList/JobList';
import JobType from './pages/JobType/JobType';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/joblist/:jobname" component={JobList}/>
        <HomeTemplate path="/joblistbytype/:typedetailid" component={JobList}/>
        <HomeTemplate path="/jobtype/:typeid" component={JobType} />
        <HomeTemplate path="/" component={Home} />
      </Switch>
    </Router>




  );
}

export default App;
