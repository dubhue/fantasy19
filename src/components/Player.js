import React from 'react'
import FilteredCell from './FilteredCell'

const Player = (props) => {
    const filt = props.isFiltered ? 'filter-focus' : '';
    const player = props.player
    return(
            <tr className={filt}>
                <td>{player.rank}</td>
                <td>{player.name.first}</td>
                <td>{player.name.last}</td>
                <td>{player.position.pos_id}</td>
                <td>{player.position.pos_rank}</td>
                <td>{player.team}</td>
                <FilteredCell focus={props.focus} cell_value={player.bye} filtered={player.isFiltered} filterVal={player.filteredValue} isMatched={player.isMatched}/>
                <td>${player.bid}</td>
          </tr>
    )
}

export default Player