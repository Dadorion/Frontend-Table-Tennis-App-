import React from 'react';
import s from './Employee.module.css';
import Card from '../../cards/Card';
import Switch from '../../blocks/Switch/Switch';

function Employee(props) {
  let techInfo = {
    left_btn: {
      btnName: 'Рецепшн',
      direct: '/',
      color: ''
    },
    right_btn: {
      btnName: 'Мастерская',
      direct: '/workshop',
      color: ''
    }
  }

  let allCards = props.employee.map(emp => <Card bio={emp} />);

  return (

    <div className={`${s.Employee}`}>
      <div className={`${s.place}`}>
      <div className={`${s.title}`}>
          Все сотрудники
        </div>
        {allCards}
      </div>
      <Switch techInfo={techInfo} />
    </div>

  )
}
export default Employee;
