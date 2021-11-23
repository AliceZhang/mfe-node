import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
//import {ErrorBoundary} from 'react-error-boundary'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';
import axios from "axios";

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
//const Auth2Lazy = lazy(() => import('./components/Auth2App'));
//const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const fetchData = async () => {
  try {
    let resonse = await axios("http://localhost:8080/home");
    if (resonse.status) {
      alert("hooray");
    } else {
      alert("OH ! Snap....");
    }
  } catch (err) {
    console.log("err ", err.message);
  }
};

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
    
    fetchData();

  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
             
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
