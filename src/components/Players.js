import React from 'react'
import Player from './Player'

const Players = (props) => (
    props.players.map((player,i)=>(
        <Player key={player.rank} player={player} isFiltered={props.isFiltered} filter={props.filter} store={props.store} reset={props.reset} num={i}/>
    ))
    
)

export default Players