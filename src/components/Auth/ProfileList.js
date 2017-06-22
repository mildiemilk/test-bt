import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { numEmployeeFill, companyFill } from '../../actions'

class ProfileList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    console.log(this.props.profile.companyName)
    return (
      <div>
        Show List
        <p>Company name : {this.props.profile.companyName}</p>
        <p>Number of Employees : {this.props.profile.companyEmploy}</p>
      </div>
    )
  }
}

ProfileList.propTypes = {
  numEmployeeFill: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
  app: state.app,
  profile: state.profile,
})
export default connect(mapStateToProps, { numEmployeeFill, companyFill })(
  ProfileList,
)
