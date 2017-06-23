import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'
import { Text, Box, Border } from '../Styled'

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
      <div style={{ marginTop: '20px' }}>
        <h2>Setting Profile<br /></h2>
        <Grid>
          <Grid.Row centered style={{ padding: '4px' }}>
            <Grid.Column width={3}>
              <Text>Company Name</Text>
            </Grid.Column>
            <Grid.Column width={3}>
              <Box
                size="small"
                onChange={e => this.onInputChange(e)}
                placeholder="Company"
                title="Enter your Company"
                defaultValue={this.props.profile.companyName}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ padding: '4px' }}>
            <Grid.Column width={3}>
              <Text>Type of Business</Text>
            </Grid.Column>
            <Grid.Column width={3}>
              <Box
                size="small"
                onChange={e => this.onInputChange(e)}
                placeholder="Company"
                title="Enter your Company"
                defaultValue={this.props.profile.companyName}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ padding: '4px' }}>
            <Grid.Column width={4}>
              <Text>Company Address</Text>
            </Grid.Column>
            <Grid.Column width={2}>
              <Box
                size="small"
                onChange={e => this.onInputChange(e)}
                placeholder="Company"
                title="Enter your Company"
                defaultValue={this.props.profile.companyName}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ padding: '4px' }}>
            <Grid.Column width={3}>
              <Text>Total Employee</Text>
            </Grid.Column>
            <Grid.Column width={3}>
              <Box
                size="small"
                onChange={e => this.onInputChange(e)}
                placeholder="Company"
                title="Enter your Company"
                defaultValue={this.props.profile.companyName}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ padding: '4px' }}>
            <Grid.Column width={3}>
              <Text>Company Tel.</Text>
            </Grid.Column>
            <Grid.Column width={3}>
              <Box
                size="small"
                onChange={e => this.onInputChange(e)}
                placeholder="Company"
                title="Enter your Company"
                defaultValue={this.props.profile.companyName}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ padding: '4px' }}>
            <Grid.Column width={3}>
              <Text>Broker Name</Text>
            </Grid.Column>
            <Grid.Column width={3}>
              <Box
                size="small"
                onChange={e => this.onInputChange(e)}
                placeholder="Company"
                title="Enter your Company"
                defaultValue={this.props.profile.companyName}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ padding: '4px' }}>
            <Grid.Column width={3}>
              <Text>Insurer Name</Text>
            </Grid.Column>
            <Grid.Column width={3}>
              <Box
                size="small"
                onChange={e => this.onInputChange(e)}
                placeholder="Company"
                title="Enter your Company"
                defaultValue={this.props.profile.companyName}
                required
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Link
          to={{ pathname: '/ProfileNumEmployee' }}
          className="ui button"
          onClick={() => this.companyHandler()}
        >
          Next
        </Link>
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
