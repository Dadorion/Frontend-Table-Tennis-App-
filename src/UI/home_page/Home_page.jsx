import React from 'react';
import s from './Home_page.module.css';
import Table from '../table/Table';
import AddGameContainer from '../AddGame/AddGameContainer';

function HomePage(props) {

  return (
    <div className={`${s.Home_page}`}>

      <Table />
      <AddGameContainer store={props.store} />

    </div>

  )
}
export default HomePage;
