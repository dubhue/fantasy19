import React from 'react'
import FilteredCell from './FilteredCell'
import styled from 'styled-components'

const NumWrap = styled.td`
    span {
        font-size: smaller;
        color: #71766D;
    }
`

const Player = (props) => {
    const filt = props.isFiltered ? 'filter-focus' : '';
    const player = props.player
    return(
            <tr className={filt}>
                <NumWrap><span>{props.num+1}</span></NumWrap>
                <td><em>#</em><strong>{player.rank}</strong></td>
                <td>{player.name.first}</td>
                <td>{player.name.last}</td>
                <FilteredCell filter={props.filter} action="pos_id" screen={player.position.pos_id} isFiltered={props.isFiltered} store={props.store} reset={props.reset} player={props.player} />
                <FilteredCell filter={props.filter} action="pos_rank" screen={parseInt(player.position.pos_rank)} isFiltered={props.isFiltered} store={props.store} reset={props.reset} player={props.player} />
                <FilteredCell filter={props.filter} action="team" screen={player.team} isFiltered={props.isFiltered} store={props.store} reset={props.reset} player={props.player} />
                <FilteredCell filter={props.filter} action="bye" screen={parseInt(player.bye)} isFiltered={props.isFiltered} store={props.store} reset={props.reset} player={props.player} />
                <td>${player.bid}</td>
          </tr>
    )
}

export default Player