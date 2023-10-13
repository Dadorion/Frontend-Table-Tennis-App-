import NavItem from '../../../UI/NavItem/NavItem';
import s from './HeaderBottom.module.css'
import news from '../../../icons/svg/navNews.svg'
import games from '../../../icons/svg/navGames.svg'
import players from '../../../icons/svg/navPlayers.svg'
import stat from '../../../icons/svg/navStat.svg'


const imgItem = {
    news: news,
    games: games,
    players: players,
    stat: stat
}

function HeaderBottom() {
    return (
        <div>
            <nav>
                <ul className={s.list}>
                    <li className={s.listItem}>
                        <div className={s.itemWrapper}>
                            <NavItem
                                img={imgItem.news}
                            />
                        </div>
                        <p className={s.itemText}>Новости</p>
                    </li>
                    <li className={s.listItem}>
                        <div className={s.itemWrapper}>
                            <NavItem
                                img={imgItem.games}
                            />
                        </div>
                        <p className={s.itemText}>Игры</p>
                    </li>
                    <li className={s.listItem}>
                        <div className={s.itemWrapper}>
                            <NavItem
                                img={imgItem.players}
                            />
                        </div>
                        <p className={s.itemText}>Игроки</p>
                    </li>
                    <li className={s.listItem}>
                        <div className={s.itemWrapper}>
                            <NavItem
                                img={imgItem.stat}
                            />
                        </div>
                        <p className={s.itemText}>Статистика</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderBottom;