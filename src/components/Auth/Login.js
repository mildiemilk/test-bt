import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login, loading } from '../../actions'

import { FormTitle, FooterLink } from '../Styled'
import Form from './Form'

const Login = ({ app, user, login, loading }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    login({ email, password })
  }

  const loadHandler = () => {
    console.log('load handler')
    loading(!app.isLoading)
  }

  console.log(app.isLoading)

  return (
    <div>
      <FormTitle>Login</FormTitle>
      {app.isLoading ? 'Loading' : 'Not sure'}
      <button type="button" onClick={() => loadHandler()}>Load Me</button>
      <Form onSubmit={handleSubmit} />
      <FooterLink to="/signup">{"You don't have an account ?"}</FooterLink>
      {user.token && <Redirect to="/" />}
    </div>
  )
}

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user, app: state.app })
export default connect(mapStateToProps, { login, loading })(Login)
