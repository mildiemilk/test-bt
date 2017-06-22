import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'

class ProfileCompany extends Component {
  constructor() {
    super()
    this.state = {}
  }
  companyHandler() {
    const { companyFill } = this.props
    companyFill(this.nameInput.value)
    console.log('company handler', this.nameInput.value)
  }

  render() {
    return (
      <div>
        Company name
        <input
          ref={i => {
            this.nameInput = i
          }}
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
