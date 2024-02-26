import React from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import s from "./Home_page.module.css";
import greyCirclesIcon from "../../assets/icons/svg_pack/Black/Regular/CirclesFour.svg";

function HomePage(props) {
  return (
    <div className={`${s.Home_page}`}>
      <div>
        <Link to="/users">
          <p>Go to USERS</p>
        </Link>
      </div>
      <h1>Твои успехи за неделю</h1>
      <h2>В сравнении с предыдущей</h2>
      <div className={s.chartLegend}>
        <div className={s.chartLegend} id={s.one}></div>
        выиграно
        <div className={s.chartLegend} id={s.two}></div>
        проиграно
      </div>
      <div className={s.chart}></div>
      <div className={s.resume}>
        <div className={s.item}>
          Всего встреч
          <div className={s.factor}>10</div>
          <div className={s.delta + " " + s.green}>+2</div>
        </div>
        <div className={s.item}>
          Процент побед
          <div className={s.factor}>69%</div>
          <div className={s.delta + " " + s.green}>+0.3%</div>
        </div>
        <div className={s.item}>
          Выиграно встреч
          <div className={s.factor}>2</div>
          <div className={s.delta + " " + s.red}>-2</div>
        </div>
        <div className={s.item}>
          Выиграно партий
          <div className={s.factor}>9</div>
          <div className={s.delta + " " + s.red}>-1</div>
        </div>
        <div className={s.item + " " + s.total}>
          Разыграно шаров
          <div className={s.factor}>87</div>
          <div className={s.delta}>+12</div>
        </div>
      </div>
      <div className={s.records}>
        Достижения
        <img src={greyCirclesIcon} alt="grey_circl" />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  };
}

export default connect(mapStateToProps, {})(HomePage);
