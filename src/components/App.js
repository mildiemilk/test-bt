import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Header from './Header'
import ProfileCompany from './Auth/ProfileCompany'
import ProfileNumEmployee from './Auth/ProfileNumEmployee'
import ProfileList from './Auth/ProfileList'
import Nav from './Header/Nav'
import { Body } from './Styled'

const Home = () => <Async load={import('./Home')} />

const App = ({ user }) => (
  <Body>
    <Header />

    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/ProfileCompany" component={ProfileCompany} />
      <Route path="/ProfileNumEmployee" component={ProfileNumEmployee} />
      <Route path="/list" component={ProfileList} />
      <Route path="/login" component={Login} />
      {user.token
        ? <Route path="/" component={Home} />
        : <Redirect to="/login" />}
    </Switch>

  </Body>
)

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default withRouter(connect(state => ({ user: state.user }))(App))
