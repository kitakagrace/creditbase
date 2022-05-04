import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const Layout = lazy(() => import('./containers/Layout'))
const UserLogin = lazy(() => import('./pages/UserLogin'))
const UserSignup = lazy(() => import('./pages/UserSignup'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const LenderSignup = lazy(() => import('./pages/LenderSignup'))
const LenderSignin = lazy(() => import('./pages/LenderSignin'))
const LoanApplication = lazy(() => import('./pages/LoanApplication'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/userlogin" component={UserLogin} />
          <Route path="/usersignup" component={UserSignup} />
          <Route path="/lendersignup" component={LenderSignup} />
          <Route path="/lendersignin" component={LenderSignin} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/loanapplication" component={LoanApplication} />
          <Route path="/dashboard" component={Dashboard} />
          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remove this Redirect */}
          <Redirect exact from="/" to="/userlogin" />
        </Switch>
      </Router>
    </>
  )
}

export default App
