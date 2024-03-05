// import React, { useState } from 'react';
import s from './Paginator.module.css'

function Paginator(props) {
  const pagesCount = Math.ceil(props.totalsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={`${s.pageNumbers}`}>
      {pages.map((p) => (
        <span
          key={p}
          className={props.currentPage === p ? s.selectedPage : undefined}
          onClick={(e) => {
            props.onPageChanged(p)
          }}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Paginator

// let sersPaginator = (props) => {

//    let [pageCounter, setPageCounter] = useState(props.pageCounterRedux) //pageCounterRedux - поле в стэйте
//    let [cicleI, setcicleI] = useState(props.CicleCounterRedux) // тоже что и пункт выше, чтоб стэйт помнил значение

//    const SetNewPageCounter = () => {
//       setPageCounter(pageCounter + 1)
//       setcicleI(cicleI + 10)
//       props.PlusPagesFunc(pageCounter + 1) // dispatch action creator-а
//       props.CiclePagesFunc(cicleI + 10) // dispatch action creator-а
//    }      // функция которая вставляется в кнопку "next"

//    const SetNewPageCounter2 = () => {

//       setPageCounter(pageCounter - 1)
//       setcicleI(cicleI - 10)
//       props.PlusPagesFunc(pageCounter - 1)
//       props.CiclePagesFunc(cicleI - 10)
//    } // функция которая вставляется в кнопку "prev"

//    let [CurrentPage, setCurrentPage] = useState(props.currentPage)
//    let pagesCount = Math.ceil((props.totalsersCount / props.pageSize));

//    /*  useEffect(() => {
//          setCurrentPage(props.currentPage)
//      }, [props.currentPage])*/

//    pagesCount = 10 * pageCounter

//    let pages = [];
//    for (let i = cicleI; i <= pagesCount; i++) {
//       pages.push(i);
//    }

//    let PrevButton = () => {
//       if (pageCounter === 1) {

//       } else {
//          return <button onClick={SetNewPageCounter2}>Prev</button>
//       }
//    }  //показывать или нет "prev"

//    return <div className={s.content}>
//       <PrevButton /> // сам ''prev
//       <span>
//          {pages
//             .map(p => {
//                return <span key={p}><button className={CurrentPage === p && s.selected}
//                   onClick={() => {
//                      props.OnPagesButton(p)
//                      setCurrentPage(CurrentPage = p);
//                   }}> {p} </button></span>

//             })}
//          <button onClick={SetNewPageCounter}>Next</button> // next
//       </span>
//    </div>

// }
// export default sersPaginator;
