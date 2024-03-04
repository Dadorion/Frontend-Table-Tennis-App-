import { connect } from 'react-redux'

import LastGames from './LastGames'

function mapStateToProps(state) {
  return {
    games: state.gameReducer.games,
  }
}
function mapDispatchToProps(state) {
  return {}
}

const LastGamesContainer = connect(mapStateToProps, mapDispatchToProps)(LastGames)

export default LastGamesContainer
