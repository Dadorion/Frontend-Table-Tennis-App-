import React from 'react';
import './App.css';
import Footer from '../src/UI/Footer/Footer';
import HeaderContainer from './sections/Header/HeaderContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reduser';
import { withRouter } from './redux/withRouter';
import Preloader from './UI/preloader/PreloaderBall';
import MainPage from './sections/Main/MainPage';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App font-roboto-regular">

        <HeaderContainer />
        <MainPage store={this.props.store} />
        <Footer />

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
