import React, { useState } from "react";
import s from "./FilterMenu.module.css";
import cros from "../../icons/svg/cros.svg";
import Button from "../Buttons/Button/Button";
import { useDispatch } from "react-redux";
import {
  setRivals,
  setDate,
  setGender,
  setWins,
  setLocations,
  setStartDate,
  setEndDate,
} from "../../redux/filter-reducer";

function FilterMenu(props) {
  const dispatch = useDispatch();

  const [localState, setLocalState] = useState({
    rivals: null,
    date: null,
    gender: null,
    wins: null,
    locations: null,
    startDate: null,
    endDate: null,
    radioState: {
      players: null,
      date: null,
      gender: null,
      wins: null,
    },
  });

  const citiesName = [
    { id: 1, name: "Балашов" },
    { id: 2, name: "Реутов" },
    { id: 3, name: "Никополь" },
    { id: 4, name: "Бердянск" },
    { id: 5, name: "Санкт-Петербург" },
  ];
  const cities = citiesName.map((city) => {
    return (
      <div key={city.id}>
        {city.name} <img src={cros} alt="city" />
      </div>
    );
  });
  const handleClose = () => {
    props.setShowFilters(false);
  };
  const handleShow = () => {
    // Сохраняем значения в глобальный стейт
    dispatch(setRivals(localState.rivals));
    dispatch(setDate(localState.date));
    dispatch(setGender(localState.gender));
    dispatch(setWins(localState.wins));
    dispatch(setLocations(localState.locations));
    dispatch(setStartDate(localState.startDate)); // Добавлено
    dispatch(setEndDate(localState.endDate));

    // Закрываем фильтр
    props.setShowFilters(false);
  };
  const handleReset = () => {
    // Сбрасываем значения в локальном стейте
    setLocalState({
      rivals: null,
      date: null,
      gender: null,
      wins: null,
      locations: null,
      startDate: null,
      endDate: null,
      radioState: {
        players: null,
        date: null,
        gender: null,
        wins: null,
      },
    });
  };
  const handleRadioChange = (group, value) => {
    setLocalState((prevState) => ({
      ...prevState,
      radioState: {
        ...prevState.radioState,
        [group]: prevState.radioState[group] === value ? null : value,
      },
    }));
  };
  
  const handleInputChange = (name, value) => {
    // Обновляем локальный стейт при изменении значения
    setLocalState((prev) => ({ ...prev, [name]: value }));
  };
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    handleInputChange("locations", selectedLocation);
  };
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    handleInputChange("startDate", startDate);
  };

  const handleEndDateChange = (e) => {
    const endDate = e.target.value;
    handleInputChange("endDate", endDate);
  };

  return (
    <div className={s.FilterMenu}>
      <div className={s.FilterHeader}>
        <div className={s.cros} id={s.left} onClick={handleClose}>
          <img src={cros} alt="cros" />
        </div>
        <h3 id={s.center}>Фильтры</h3>
        <div id={s.right} onClick={handleReset}>
          Сбросить
        </div>
      </div>

      <div className={s.FilterContent}>
        <div className={s.FilterContent_wrap}>
          <h3>По игрокам</h3>
          <div className={s.dateContent}>
            <div className={s.dateContent_item}>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="players"
                  value="rival"
                  checked={localState.radioState.players === "rival"}
                  onChange={() => handleRadioChange("players", "rival")}
                />
                <span className={s.customRadio}></span>
                соперники
              </label>
            </div>
            <div className={s.dateContent_item}>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="players"
                  value="all_players"
                  checked={localState.radioState.players === "all_players"}
                  onChange={() => handleRadioChange("players", "all_players")}
                />
                <span className={s.customRadio}></span>
                все игроки
              </label>
            </div>
          </div>
          <h3>По дате</h3>
          <div className={s.dateContent}>
            <div className={s.dateContent_item}>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="date"
                  value="today"
                  onChange={() => handleInputChange("date", "today")}
                />
                <span className={s.customRadio}></span>
                сегодня
              </label>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="date"
                  value="yesterday"
                  onChange={() => handleInputChange("date", "yesterday")}
                />
                <span className={s.customRadio}></span>
                вчера
              </label>
            </div>
            <div className={s.dateContent_item}>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="date"
                  value="week"
                  onChange={() => handleInputChange("date", "week")}
                />
                <span className={s.customRadio}></span>
                за неделю
              </label>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="date"
                  value="month"
                  onChange={() => handleInputChange("date", "month")}
                />
                <span className={s.customRadio}></span>
                за месяц
              </label>
            </div>
          </div>

          <div className={s.dateContent_period}>
            <h4>За период</h4>
            <div className={s.dateContent_period_items}>
              <div>
                <span>с</span>
                <input type="date" value={localState.startDate} onChange={handleStartDateChange}/>
              </div>
              <div>
                <span>по</span>
                <input type="date" value={localState.endDate} onChange={handleEndDateChange}/>
              </div>
            </div>
          </div>

          <div className={s.genderContent}>
            <h3>По полу</h3>
            <div>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="gender"
                  value="male"
                  onChange={() => handleInputChange("gender", "male")}
                />
                <span className={s.customRadio}></span>
                только мужчины
              </label>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="gender"
                  value="female"
                  onChange={() => handleInputChange("gender", "female")}
                />
                <span className={s.customRadio}></span>
                только женщины
              </label>
            </div>
          </div>
          <div className={s.winerContent}>
            <h3>По победам</h3>
            <div>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="wins"
                  value="win"
                  onChange={() => handleInputChange("wins", "win")}
                />
                <span className={s.customRadio}></span>
                кого выигрываю
              </label>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="wins"
                  value="loose"
                  onChange={() => handleInputChange("wins", "loose")}
                />
                <span className={s.customRadio}></span>
                кому проигрываю
              </label>
              <label>
                <input
                  type="radio"
                  className={s.realRadio}
                  name="wins"
                  value="hardest"
                  onChange={() => handleInputChange("wins", "hardest")}
                />
                <span className={s.customRadio}></span>
                топ сложных соперников
              </label>
            </div>
          </div>
          <div className={s.locationContent}>
            <h3>По локации</h3>
            <div className={s.selectWrapper}>
              <select onChange={handleLocationChange} value={localState.locations}>
                <option disabled>Название локации</option>
                <option>Хопер</option>
                <option>Балашов</option>
                <option>Саратов</option>
                <option>Барисоглебск</option>
              </select>
            </div>
            <div className={s.lastLocation}>{cities}</div>
          </div>
          <div className={s.btnShow} onClick={handleShow}>
            <Button buttName="Показать" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
