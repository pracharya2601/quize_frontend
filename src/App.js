import React, {Suspense ,useState, useEffect, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AuthProvider from 'context/auth';
import DataProvider from 'context/data';

import {CheckOpenRoute, ProtectedRoute} from 'utils/AuthRoute';

//home
const Home = lazy(() => import('pages/index'));
//dashboard
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
//auth
const Signin = lazy(()=> import('pages/auth/Signin'));
const Signup = lazy(()=> import('pages/auth/Signup'));
const ResetPassword = lazy(()=> import('pages/auth/ResetPassword'));


function App() {

  return (
    <AuthProvider>
      <DataProvider>
      <Router>
        <Suspense fallback={<div>Lading...</div>}>
          <Switch>
            <CheckOpenRoute path="/" exact component={Home} />
            <ProtectedRoute path="/dashboard" exact component={Dashboard} />
            <CheckOpenRoute path="/auth/signin" exact component={Signin}/>
            <CheckOpenRoute path="/auth/signup" exact component={Signup} />
            <CheckOpenRoute path="/auth/resetpassword" exact component={ResetPassword} />
          </Switch>
        </Suspense>
      </Router>
      </DataProvider>
    </AuthProvider>
  )
}

export default App;
