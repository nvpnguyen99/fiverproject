import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './assets/css/main.css';
import { createBrowserHistory } from 'history';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import DashBoard from './templates/DashBoard';
import Home from './pages/Home/Home';
import JobList from './pages/JobList/JobList';
import JobType from './pages/JobType/JobType';
import Detail from './pages/Detail/Detail';
import LoginPage from './pages/Login';
import { ManageJob } from './pages/dashboard';

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router history={history}>
        <Switch>
          <HomeTemplate path='/home' component={Home} />
          <HomeTemplate path='/joblist/:jobname' component={JobList} />
          <HomeTemplate
            path='/joblistbytype/:typedetailid'
            component={JobList}
          />
          <HomeTemplate path='/jobtype/:typeid' component={JobType} />
          <HomeTemplate path='/detail/:jobid' component={Detail} />
          <Route path='/login' component={LoginPage} />
          <Route path='/dashboard'>
            <DashBoard>
              <Route path='/dashboard/jobs' component={ManageJob} />
              <Route exact path='/dashboard'>
                <h1>DashBoard</h1>
              </Route>
            </DashBoard>
          </Route>
          <HomeTemplate path='/' component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
