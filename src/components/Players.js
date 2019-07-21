import React from 'react'
import Player from './Player'

const Players = (props) => (
    props.players.map(player=>(
        <Player key={player.rank} player={player} isFiltered={props.isFiltered}/>
    ))
    
)

export default Players