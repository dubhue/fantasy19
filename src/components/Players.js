import React from 'react'
import Player from './Player'

const Players = (props) => (
    props.players.map(player=>(
        <Player key={player.rank} player={player} isFiltered={props.isFiltered} filterByBye={props.filterByBye} filterByTeam={props.filterByTeam} store={props.store} reset={props.reset}/>
    ))
    
)

export default Players