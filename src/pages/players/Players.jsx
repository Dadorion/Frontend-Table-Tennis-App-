import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import s from './Players.module.css'

import arrowLeftIcon from '../../assets/icons/svg_pack/Black/Light/ArrowLeft_light.svg'
import magnifier from '../../assets/icons/svg_pack/Black/Light/Search_light.svg'
import caretLeftIcon from '../../assets/icons/svg_pack/Black/Regular/CaretLeft.svg'
import caretRightIcon from '../../assets/icons/svg_pack/Black/Regular/CaretRight.svg'
import plusIcon from '../../assets/icons/svg_pack/Black/Regular/Plus.svg'
import sorterIcon from '../../assets/icons/svg_pack/Black/Regular/Swap.svg'
import {
  requestPlayersTC,
  requestPlayersWithNameTC,
  setFindPlayerNameTC,
  setPlayers,
  setSortMode,
  setSortModeName,
  setSortDirection,
  setCurrentPage,
} from '../../redux/players-reducer'
import FinderInput from '../../UI/FinderInput/FinderInput'
import PlayerItem from '../../UI/Player_Item/Player_Item'
import PopupAddNewPlayer from '../../UI/Popup_AddNewPlayer/Popup_AddNewPlayer'
import SorterMenu from '../../UI/SorterMenu/SorterMenu'

function Players(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showSorter, setShowSorter] = useState(false)
  // const [sortModeName, setSortModeName] = useState("Недавние");
  const [showFilters, setShowFilters] = useState(false)
  const [showFinderPlayerName, setShowFinderPlayerName] = useState(false)
  const [showEditPlayer, setShowEditPlayer] = useState(false)

  const { currentPage, pageSize } = props.pagination
  const { mode, direct, sortModeName } = props.sort

  const sortItems = [
    { id: 1, name: 'Недавние', mode: 'id', direct: 'DESC' },
    { id: 2, name: 'По алфавиту (А – Я)', mode: 'name', direct: 'ASC' },
    { id: 3, name: 'По алфавиту (Я – А)', mode: 'name', direct: 'DESC' },
    // {
    //   id: 4,
    //   name: "Победные очки (от большего)",
    //   mode: "score",
    //   direct: "DESC",
    // },
    // {
    //   id: 5,
    //   name: "Победные очки (от меньшего)",
    //   mode: "score",
    //   direct: "ASC",
    // },
  ]

  if (!props.players) {
    return <div className={s.Players}>Loading...</div>
  }
  const players = props.players.map((player) => {
    return (
      <PlayerItem
        key={player.id}
        name={player.name}
        surname={player.surname}
        percent={player.winsPercent}
        photoPath={player.photo_path}
      />
    )
  })
  const handleOnChangeFind = (e) => {
    const text = e.target.value.trim()

    if (text === '') {
      dispatch(setFindPlayerNameTC(''))
      dispatch(setPlayers(null))
      dispatch(requestPlayersTC(currentPage, pageSize, mode, direct))
    } else {
      dispatch(setFindPlayerNameTC(text))
      setTimeout(() => {
        dispatch(requestPlayersWithNameTC(text))
      }, 300)
    }
  }
  const handleReset = () => {
    dispatch(setFindPlayerNameTC(''))
    dispatch(setPlayers([]))
    dispatch(requestPlayersTC(currentPage, pageSize, mode, direct))
  }
  const handleCancelSearch = () => {
    setShowFinderPlayerName(false)
    dispatch(requestPlayersTC(currentPage, pageSize, mode, direct))
  }
  const handleSetSortMode = (e) => {
    const item = sortItems.find((item) => {
      return item.name === e.target.innerHTML
    })

    dispatch(setSortModeName(item.name))
    setShowSorter(false)
    dispatch(setSortMode(item.mode))
    dispatch(setSortDirection(item.direct))
  }
  const handleSort = () => {
    setShowSorter(!showSorter)
  }
  const handleFilter = () => {
    setShowFilters(!showFilters)
  }
  const handleFindPlayerName = () => {
    setShowFinderPlayerName(!showFinderPlayerName)
  }
  const handleGoBack = () => {
    navigate(-1)
  }
  const handleAddNewPlayer = () => {
    setShowEditPlayer(true)
  }
  const handlePageLeft = () => {
    if (props.pagination.currentPage !== 1) {
      dispatch(setCurrentPage(props.pagination.currentPage - 1))
    }
  }
  const handlePageRight = () => {
    if (props.pagination.currentPage < props.pagination.pagesCount)
      dispatch(setCurrentPage(props.pagination.currentPage + 1))
  }

  return (
    <div className={`${s.Players}`}>
      <div className={`${s.header}`}>
        <img src={arrowLeftIcon} alt='arrowLeftIcon' onClick={handleGoBack} />
        <h3>Игроки</h3>
        <img src={plusIcon} alt='plusIcon' onClick={handleAddNewPlayer} />
      </div>
      {showFinderPlayerName && (
        <div className={s.finderPlayers}>
          <FinderInput
            value={props.findPlayerName}
            placeholder={'Поиск по соперникам'}
            handleOnChange={handleOnChangeFind}
            handleReset={handleReset}
          />
          <span onClick={handleCancelSearch}>отменить</span>
        </div>
      )}
      {!showFinderPlayerName && (
        <div className={`${s.filter}`}>
          <div className={`${s.sorter}`}>
            <div className={`${s.sortMode}`} onClick={handleSort}>
              <img src={sorterIcon} alt='sorterIcon' />
              {sortModeName}
            </div>
          </div>
          {showSorter && <SorterMenu list={sortItems} handle={handleSetSortMode} />}
          {/* {showFilters && <FilterMenu handleSetSortMode={handleSetSortMode} setShowFilters={setShowFilters}/>} */}

          <div onClick={handleFilter}>
            <img src={magnifier} alt='magnifier' onClick={handleFindPlayerName} />
            {/* <img src={settingsIcon} alt="filter_icon" /> */}
          </div>
        </div>
      )}

      <div className={`${s.list}`}>{players}</div>

      <div className={s.pagination}>
        <img src={caretLeftIcon} alt='caretLeftIcon' onClick={handlePageLeft} />
        <div>{`${props.pagination.currentPage}/${props.pagination.pagesCount}`}</div>
        <img src={caretRightIcon} alt='caretRightIcon' onClick={handlePageRight} />
      </div>

      {showEditPlayer && <PopupAddNewPlayer player={props.players} exit={setShowEditPlayer} />}
    </div>
  )
}
export default Players
