import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Message, Blue } from './Styled'

const Home = ({ user }) => {
  return (
    <div>
      {user.token
        ? <Message>{"You're logged in as "}<Blue>{user.email}</Blue></Message>
        : <Redirect to="/login" />}
      <Link to={{ pathname: '/ProfileCompany' }} className="ui button">
        Create Profile
      </Link>
    </div>
  )
}

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}
export default connect(state => ({ user: state.user }))(Home)
