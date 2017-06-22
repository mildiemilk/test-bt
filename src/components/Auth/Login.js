import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { login, loading, companyCount, companyDiscount } from '../../actions'

import { FormTitle, FooterLink } from '../Styled'
import Form from './Form'

const Login = ({
  app,
  user,
  company,
  companyCount,
  companyDiscount,
  login,
  loading,
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    login({ email, password })
  }

  const loadHandler = () => {
    console.log('load handler')
    loading(!app.isLoading)
  }

  const countHandler = () => {
    companyCount(company.count)
  }
  const disCountHandler = () => {
    companyDiscount(company.count)
  }

  console.log('count', company)

  return (
    <div>
      <FormTitle>Login</FormTitle>
      {app.isLoading ? 'Loading' : 'Not sure'}
      Counting : {company.count}
      <button type="button" onClick={() => loadHandler()}>Load Me</button>
      <button type="button" onClick={() => countHandler()}>count</button>
      <button type="button" onClick={() => disCountHandler()}>discount</button>
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
  companyCount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
  app: state.app,
  company: state.company,
})
export default connect(mapStateToProps, {
  login,
  loading,
  companyCount,
  companyDiscount,
})(Login)
