import React from 'react';
import './App.css';
<<<<<<< HEAD
// import Footer from '../src/UI/Footer/Footer';
import Content from './UI/content/Content';
// import HeaderContainer from './UI/Header/HeaderContainer';
=======
import Footer from '../src/UI/Footer/Footer';
import HeaderContainer from './sections/Header/HeaderContainer';
>>>>>>> 2f13fb1dd5b713add5aa0823f7e36ced87e1d4be
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
<<<<<<< HEAD
      <div className="App">

        {/* <div className='black_hat'>black hat</div> */}

        {/* <HeaderContainer /> */}
        <Content store={this.props.store} />
        {/* <Footer /> */}

        {/* <div className='white_line' /> */}

=======
      <div className="App font-roboto-regular">

        <HeaderContainer />
        <MainPage store={this.props.store} />
        <Footer />

>>>>>>> 2f13fb1dd5b713add5aa0823f7e36ced87e1d4be
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
