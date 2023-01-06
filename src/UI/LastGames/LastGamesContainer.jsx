import LastGames from './LastGames';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    games: state.gameReducer.games
  }
}
function mapDispatchToProps(state) { return {} }

const LastGamesContainer =
  connect(mapStateToProps, mapDispatchToProps)(LastGames);

export default LastGamesContainer;