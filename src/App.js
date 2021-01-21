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
const Cart = lazy(() => import('pages/cart/Cart'));
const Quize = lazy(() => import ('pages/quize/Quize'));
//point 
const Points = lazy(() => import('pages/points/Points'));
const PointHistory = lazy(() => import('pages/points/PointHistory'))
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
            <ProtectedRoute path="/dashboard/play" exact component={Quize} />
            <ProtectedRoute path="/dashboard/cart" exact component={Cart} />
            <ProtectedRoute path="/points/list" exact component={Points} />
            <ProtectedRoute path="/points/history/:historySlug" exact component={PointHistory}/>
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
