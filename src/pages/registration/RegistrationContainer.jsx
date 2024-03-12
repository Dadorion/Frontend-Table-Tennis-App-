import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Registration';
import withRouter from '../../redux/withRouter';

function ProfileContainer({ match, getProfile, profile }) {
  useEffect(() => {
    let { userId } = match.params;
    if (!userId) {
      userId = 2;
    }
    getProfile(userId);
  }, [match.params, getProfile]);

  return <Profile {...{ profile }} />;
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  // getProfile,
})(WithUrlDataContainerComponent);
