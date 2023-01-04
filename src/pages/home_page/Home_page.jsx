import React from 'react';
import s from './Home_page.module.css';
import Table from '../../UI/table/Table';
import AddGameContainer from '../../UI/AddGame/AddGameContainer';
import LastGamesContainer from '../../UI/LastGames/LastGamesContainer';

function HomePage(props) {

  return (
    <div className={`${s.Home_page}`}>

      <Table />
      <AddGameContainer store={props.store}/>
      <LastGamesContainer store={props.store}/>
    </div>

  )
}
export default HomePage;
