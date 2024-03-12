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
import PopupAddNewPlayer from '../../UI/PopupAddNewPlayer/PopupAddNewPlayer'
import SorterMenu from '../../UI/SorterMenu/SorterMenu'

function Players({pagination, sort, players, findPlayerName}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showSorter, setShowSorter] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [showFinderPlayerName, setShowFinderPlayerName] = useState(false)
  const [showEditPlayer, setShowEditPlayer] = useState(false)

  const { currentPage, pageSize } = pagination
  const { mode, direct, sortModeName } = sort

  const sortItems = [
    {
      id: 1,
      name: 'Недавние',
      mode: 'id',
      direct: 'DESC',
    },
    {
      id: 2,
      name: 'По алфавиту (А – Я)',
      mode: 'name',
      direct: 'ASC',
    },
    {
      id: 3,
      name: 'По алфавиту (Я – А)',
      mode: 'name',
      direct: 'DESC',
    },
  ]

  if (!players) {
    return <div className={s.Players}>Loading...</div>
  }
  const playersItems = players.map((player) => (
    <PlayerItem
      key={player.id}
      name={player.name}
      surname={player.surname}
      percent={player.winsPercent}
      photoPath={player.photo_path}
    />
  ))
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
    const sortItem = sortItems.find((item) => item.name === e.target.innerHTML)

    dispatch(setSortModeName(sortItem.name))
    setShowSorter(false)
    dispatch(setSortMode(sortItem.mode))
    dispatch(setSortDirection(sortItem.direct))
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
    if (pagination.currentPage !== 1) {
      dispatch(setCurrentPage(pagination.currentPage - 1))
    }
  }
  const handlePageRight = () => {

    if (pagination.currentPage < pagination.pagesCount) {
        dispatch(setCurrentPage(pagination.currentPage + 1))
    }
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
              value={findPlayerName}
              placeholder='Поиск по соперникам'
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

        <div className={`${s.list}`}>{playersItems}</div>

        <div className={s.pagination}>
          <img src={caretLeftIcon} alt='caretLeftIcon' onClick={handlePageLeft} />
          <div>{`${pagination.currentPage}/${pagination.pagesCount}`}</div>
          <img src={caretRightIcon} alt='caretRightIcon' onClick={handlePageRight} />
        </div>

        {showEditPlayer && <PopupAddNewPlayer player={players} exit={setShowEditPlayer} />}
      </div>
    )
}



export default Players
