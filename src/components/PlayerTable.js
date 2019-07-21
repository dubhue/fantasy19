import React from 'react'
import { Table } from 'react-bootstrap'
import Players from './Players'
import SortHeader from './SortableHeader'

import t300 from '../espn'

class PlayerTable extends React.Component {
    state = {
        isFiltered: false,
        players: t300.sort((a,b)=>(parseInt(a.rank) > parseInt(b.rank)) ? 1 : -1),
        playerStore: null
    }
    sortByRank = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(parseInt(a.rank) > parseInt(b.rank)) ? 1 : -1) :
          prev.players.sort((a,b)=>(parseInt(a.rank) < parseInt(b.rank)) ? 1 : -1)
          )
      )
    }
    sortByLastName = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(a.name.last > b.name.last) ? 1 : -1) :
          prev.players.sort((a,b)=>(a.name.last < b.name.last) ? 1 : -1)
          )
      )
    }
    sortByFirstName = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(a.name.first > b.name.first) ? 1 : -1) :
          prev.players.sort((a,b)=>(a.name.first < b.name.first) ? 1 : -1)
          )
      )
    }
    sortByPosition = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(a.position.pos_id > b.position.pos_id) ? 1 : -1) :
          prev.players.sort((a,b)=>(a.position.pos_id < b.position.pos_id) ? 1 : -1)
        )
      )
    }
    sortByPositionRank = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(parseInt(a.position.pos_rank) > parseInt(b.position.pos_rank)) ? 1 : -1) :
          prev.players.sort((a,b)=>(parseInt(a.position.pos_rank) < parseInt(b.position.pos_rank)) ? 1 : -1)
        )
      )
    }
    sortByTeam = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(a.team > b.team) ? 1 : -1) :
          prev.players.sort((a,b)=>(a.team < b.team) ? 1 : -1)
        )
      )
    }
    sortByBye = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(parseInt(a.bye) > parseInt(b.bye)) ? 1 : -1) :
          prev.players.sort((a,b)=>(parseInt(a.bye) < parseInt(b.bye)) ? 1 : -1)
        )
      )
    }
    sortByBid = (toggle) => {
      this.setState(
        prev=>(
          toggle ?
          prev.players.sort((a,b)=>(parseInt(a.bid) > parseInt(b.bid)) ? 1 : -1) :
          prev.players.sort((a,b)=>(parseInt(a.bid) < parseInt(b.bid)) ? 1 : -1)
        )
      )
    }
    filterByBye = (match) => {
      const oldState = this.state.players
      const filtered = [];
      
      oldState.forEach((player)=>{
        if(parseInt(player.bye) === match){
          filtered.push(player)
        }
      })
      this.setState(
        {
          players: filtered,
          isFiltered: true,
          playerStore: oldState
        }
      )
    }
    filterByTeam = (match) => {
      const oldState = this.state.players
      const filtered = [];
      
      oldState.forEach((player)=>{
        if(player.team === match){
          filtered.push(player)
        }
      })
      this.setState(
        {
          players: filtered,
          isFiltered: true,
          playerStore: oldState
        }
      )
    }
    resetPlayerStore = () => {
      const stored = this.state.playerStore
      this.setState(
        {
          isFiltered: false,
          players: stored,
          playerStore: null
        }
      )
    }
    render() {
        return(
    <Table>
        <thead>
          <tr>
            <SortHeader title="Overall" sort={this.sortByRank}/>
            <SortHeader title="First Name" sort={this.sortByFirstName} />
            <SortHeader title="Last Name" sort={this.sortByLastName} />
            <SortHeader title="Position" sort={this.sortByPosition} />
            <SortHeader title="Position Rank" sort={this.sortByPositionRank} />
            <SortHeader title="Team" sort={this.sortByTeam} />
            <SortHeader title="Bye" sort={this.sortByBye} />
            <SortHeader title="Bid" sort={this.sortByBid} />
          </tr>
        </thead>
        <tbody>
              <Players players={this.state.players} reset={this.resetPlayerStore} filterByBye={this.filterByBye} filterByTeam={this.filterByTeam} store={this.playerStore} isFiltered={this.state.isFiltered} />
        </tbody>
      </Table>
        )
    }
}

export default PlayerTable