import React from 'react'
import FilteredCell from './FilteredCell'

const Player = (props) => {
    const filt = props.isFiltered ? 'filter-focus' : '';
    const player = props.player
    return(
            <tr className={filt}>
                <td><em>#</em><strong>{player.rank}</strong></td>
                <td>{player.name.first}</td>
                <td>{player.name.last}</td>
                <td>{player.position.pos_id}</td>
                <td>{player.position.pos_rank}</td>
                <FilteredCell filter={props.filterByTeam} screen={player.team} isFiltered={props.isFiltered} store={props.store} reset={props.reset} player={props.player} />
                <FilteredCell filter={props.filterByBye} screen={parseInt(player.bye)} isFiltered={props.isFiltered} store={props.store} reset={props.reset} player={props.player} />
                <td>${player.bid}</td>
          </tr>
    )
}

export default Player