import React from 'react';
import { connect } from 'react-redux';
import s from './Home_page.module.css';
import Table from '../../UI/table/Table';
import AddGameContainer from '../../UI/AddGame/AddGameContainer';
import LastGamesContainer from '../../UI/LastGames/LastGamesContainer';
import { Navigate } from 'react-router-dom';

function HomePage(props) {

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={`${s.Home_page}`}>

      <Table />
      <AddGameContainer store={props.store} />
      <LastGamesContainer store={props.store} />
    </div>

  )
}


function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect( mapStateToProps, {})(HomePage);