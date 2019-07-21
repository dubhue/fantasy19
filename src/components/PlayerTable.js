import React from 'react'
import { Table } from 'react-bootstrap'
import Players from './Players'
import SortHeader from './SortableHeader'

import t300 from '../espn'

class PlayerTable extends React.Component {
    state = {
        isFiltered: false,
        filteredValue: null,
        isMatched: false,
        players: t300,
        filteredPlayers: null
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
    selectFilterFocus = (val) => {
        this.setState(
            ()=>{
                return(
                    {
                        isFiltered: true,
                        filteredValue: parseInt(val),
                        isKey: true,
                    }
                )
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
              <Players players={this.state.players} isFiltered={this.state.isFiltered} />
        </tbody>
      </Table>
        )
    }
}

export default PlayerTable