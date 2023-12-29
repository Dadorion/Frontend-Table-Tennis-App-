import React from "react";
import s from "./equipmentInfo.module.css";
import pad from "../../../../icons/svg/pad.svg";
import { useLocation } from "react-router-dom";
import { changeRacketBase, changeRacketForhand, changeRacketBackhand } from "../../../../redux/profile-reducer";
import { useDispatch } from "react-redux";

function EquipmentInfo({ base, forhand_pad, backhand_pad }) {
  const location = useLocation();
  const dispatch = useDispatch()

  // const [equipData, setEquipData] = useState({
  //   base: base || '',
  //   forhand_pad: forhand_pad || '',
  //   backhand_pad: backhand_pad || '',
  // })

  const handlerChangeRacketBase = (e) => {
    const text = e.target.value;
    dispatch(changeRacketBase(text));
  };
  const handlerChangeRacketForhand = (e) => {
    const text = e.target.value;
    dispatch(changeRacketForhand(text));
  };
  const handlerChangeRacketBackhand = (e) => {
    const text = e.target.value;
    dispatch(changeRacketBackhand(text));
  };

  return (
    <div className={s.EquipmentInfo}>
      
          {location.pathname === "/profile" && (
            <>
              <div className={s.header}>
                <img src={pad} alt="edite_pen" />
                <h3>Ракетка</h3>
              </div>
              <div className={s.hardInfo}>
                <div>
                  <span>Основание</span>
                  <span>{base}</span>
                </div>
                <hr />
                <div>
                  <span>Форхенд</span>
                  <span>{forhand_pad}</span>
                </div>
                <hr />
                <div>
                  <span>Бекхэнд</span>
                  <span>{backhand_pad}</span>
                </div>
                <hr />
              </div>
            </>
          )}
      

      {location.pathname === "/edit-my-profile" && (
        <>
          <div className={s.header}>
            <img src={pad} alt="edite_pen" />
            <h3>Ракетка</h3>
          </div>
          <div className={s.wrapper}>
            <div className={s.inpItem}>
              <span className={`${s.leftColumn}`}>Основание</span>
              <input
                value={base}
                // ref={racketBaseInput}
                onChange={handlerChangeRacketBase}
              />
            </div>
            <div className={s.birthday_gender}>
              <div className={s.inpItem}>
                <span className={`${s.leftColumn}`}>Форхенд</span>
                <input
                value={forhand_pad}
                // ref={racketForhandInput}
                onChange={handlerChangeRacketForhand}
              />
              </div>
              <div className={s.inpItem}>
                <span className={`${s.leftColumn}`}>Бекхенд</span>
                <input
                value={backhand_pad}
                // ref={racketBackhandInput}
                onChange={handlerChangeRacketBackhand}
              />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default EquipmentInfo;
