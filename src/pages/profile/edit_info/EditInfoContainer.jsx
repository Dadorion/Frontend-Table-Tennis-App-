import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import EditInfo from './EditInfo'

import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { withRouter } from '../../../redux/withRouter'

function EditInfoContainer(props) {
  return <EditInfo {...props} />
}

function mapStateToProps(state) {
  return {
    profile: state.profileReducer.profile,
    newProfileData: state.profileReducer.newProfileData,
  }
}
export default compose(connect(mapStateToProps, {}), withRouter, withAuthRedirect)(EditInfoContainer)
