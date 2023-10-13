import React from 'react';
import { connect } from 'react-redux';
import s from './Home_page.module.css';
import { Navigate } from 'react-router-dom';
import Header from '../../sections/Header/Header';

function HomePage(props) {

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    // <div className={`${s.Home_page}`}>

    //   <Table />
    //   <AddGameContainer store={props.store} />
    //   <LastGamesContainer store={props.store} />
    // </div>
    <div className={`${s.Home_page}`}>

      {/* <Header/> */}
      
    </div>
    
    
  )
}


function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect( mapStateToProps, {})(HomePage);