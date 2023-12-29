import React from 'react';
import './App.css';
import Content from './UI/content/Content';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reduser';
import { withRouter } from './redux/withRouter';
import Preloader from './UI/preloader/PreloaderBall';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App">
        <Content />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { initialized: state.app.initialized }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App);
