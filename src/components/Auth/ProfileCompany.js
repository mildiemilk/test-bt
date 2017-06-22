import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'

class ProfileCompany extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
    }
  }
  companyHandler() {
    const { companyFill } = this.props
    companyFill(this.state.nameInput)
    console.log('company handler', this.state.nameInput)
  }
  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }
  render() {
    return (
      <div>
        Company name
        <input
          onChange={e => this.onInputChange(e)}
          placeholder="Company"
          title="Enter your Company"
          defaultValue={this.props.profile.companyName}
          required
        />

        <button type="submit" onClick={() => this.companyHandler()}>
          Next
        </button>
      </div>
    )
  }
}

ProfileCompany.propTypes = {
  companyFill: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
  app: state.app,
  profile: state.profile,
})
export default connect(mapStateToProps, { companyFill })(ProfileCompany)
