import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import './scss/App.scss'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { initializeAppTC } from './redux/app-reducer'
import  withRouter  from './redux/withRouter'
import Content from './UI/content/Content'
import LoaderSVG from './UI/SpinnerPreloader/Spinner'

function App({ initialized, initializeApp }) {
  useEffect(() => {
    initializeApp()
  }, [initializeApp])

  if (!initialized) {
    return <LoaderSVG />
  }

  return (
    <div className='App'>
      <Content />
    </div>
  )
}

App.propTypes = {
  initialized: PropTypes.bool.isRequired,
  initializeApp: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp: initializeAppTC }))(App)
