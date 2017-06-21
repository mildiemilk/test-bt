import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Header from './Header'
import about from './about'
import Nav from './Header/Nav'
import { Body } from './Styled'

const Home = () => <Async load={import('./Home')} />

const App = ({ user }) => (
  <Body>
    <Header />

    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/about" component={about} />
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
