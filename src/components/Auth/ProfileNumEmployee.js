import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { numEmployeeFill } from '../../actions'
import { Button } from 'semantic-ui-react'

class ProfileNumEmployee extends Component {
  constructor() {
    super()
    this.state = {
      numInput: '',
    }
  }

  numEmployHandler() {
    const { numEmployeeFill } = this.props
    numEmployeeFill(this.state.numInput)
    console.log('company handler', this.state.numInput)
  }
  onInputChange(e) {
    this.setState({ numInput: e.target.value })
  }

  render() {
    return (
      <div>
        Number of Employees
        <input
          onChange={e => this.onInputChange(e)}
          placeholder="Employee"
          title="Enter your Company"
          defaultValue={this.props.profile.companyEmploy}
          required
        />
        <Link
          to={{ pathname: '/list' }}
          className="ui button"
          onClick={() => this.numEmployHandler()}
        >
          Submit
        </Link>
        <Link to={{ pathname: '/ProfileCompany' }} className="ui button">
          Back
        </Link>
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
