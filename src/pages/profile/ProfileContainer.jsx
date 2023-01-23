import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 27483 }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <>
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    </>
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
  }
}

export default compose(
  connect(mapStateToProps, {
    getProfile, getStatus, updateStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
