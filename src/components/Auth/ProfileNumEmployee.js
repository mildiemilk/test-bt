import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { numEmployeeFill } from '../../actions'

class ProfileNumEmployee extends Component {
  constructor() {
    super()
    this.state = {}
  }

  numEmployHandler() {
    const { numEmployeeFill } = this.props
    numEmployeeFill(this.numInput.value)
    console.log('company handler', this.numInput.value)
  }

  render() {
    return (
      <div>
        Number of Employees
        <input
          ref={i => {
            this.numInput = i
          }}
          placeholder="Employee"
          title="Enter your Company"
          defaultValue={this.props.profile.companyEmploy}
          required
        />
        <button type="button" onClick={() => this.numEmployHandler()}>
          Next
        </button>
      </div>
    )
  }
}

ProfileNumEmployee.propTypes = {
  numEmployeeFill: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
  app: state.app,
  profile: state.profile,
})
export default connect(mapStateToProps, { numEmployeeFill })(ProfileNumEmployee)
