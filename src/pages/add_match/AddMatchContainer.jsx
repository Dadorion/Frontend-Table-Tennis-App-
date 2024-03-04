import React from 'react'
import { connect } from 'react-redux'

import Profile from './Registration'

import { getProfile } from '../../redux/profile-reducer'
import { withRouter } from '../../redux/withRouter'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getProfile(userId)
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profileReducer.profile,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  getProfile,
})(WithUrlDataContainerComponent)
