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
    sortColumn = (toggle, title) => {
      const unsorted = this.state.players
      switch(true){
        case(title==='Overall'):
              toggle ?
                unsorted.sort((a,b)=>(parseInt(a.rank) > parseInt(b.rank)) ? 1 : -1) :
                unsorted.sort((a,b)=>(parseInt(a.rank) < parseInt(b.rank)) ? 1 : -1)
                break;
        case(title==="Last Name"):
            toggle ?
              unsorted.sort((a,b)=>(a.name.last > b.name.last) ? 1 : -1) :
              unsorted.sort((a,b)=>(a.name.last < b.name.last) ? 1 : -1)
              break;
        case(title==="First Name"):
          toggle ?
            unsorted.sort((a,b)=>(a.name.first > b.name.first) ? 1 : -1) :
            unsorted.sort((a,b)=>(a.name.first < b.name.first) ? 1 : -1)
            break;
        case(title==="Position"):
          toggle ?
            unsorted.sort((a,b)=>(a.position.pos_id > b.position.pos_id) ? 1 : -1) :
            unsorted.sort((a,b)=>(a.position.pos_id < b.position.pos_id) ? 1 : -1)
            break;
        case(title==="Position Rank"):
        toggle ?
        unsorted.sort((a,b)=>(parseInt(a.position.pos_rank) > parseInt(b.position.pos_rank)) ? 1 : -1) :
        unsorted.sort((a,b)=>(parseInt(a.position.pos_rank) < parseInt(b.position.pos_rank)) ? 1 : -1)
        break;
        case(title==="Team"):
        toggle ?
        unsorted.sort((a,b)=>(a.team > b.team) ? 1 : -1) :
        unsorted.sort((a,b)=>(a.team < b.team) ? 1 : -1)
        break;
        case(title==="Bye"):
        toggle ?
          unsorted.sort((a,b)=>(parseInt(a.bye) > parseInt(b.bye)) ? 1 : -1) :
          unsorted.sort((a,b)=>(parseInt(a.bye) < parseInt(b.bye)) ? 1 : -1)
          break;
          case(title==="Bid"):
          toggle ?
          unsorted.sort((a,b)=>(parseInt(a.bid) > parseInt(b.bid)) ? 1 : -1) :
          unsorted.sort((a,b)=>(parseInt(a.bid) < parseInt(b.bid)) ? 1 : -1)
          break;
      default:
              console.log('error with action '+title)
      }
      this.setState(
        {
          players: unsorted
        }
      )
    }
    filterCell = (match,action) => {
      const oldState = this.state.players
      const filtered = [];
      oldState.forEach((player)=>{
      switch(true){
        case(action==='bye'):
            if(parseInt(player.bye) === match){
              filtered.push(player)
            }
          break;
        case(action==='team'):
            if(player.team === match){
              filtered.push(player)
            }
          break;
        case(action==='pos_id'):
          if(player.position.pos_id === match){
            filtered.push(player)
          }
        break;
        case(action==='pos_rank'):
          if(parseInt(player.position.pos_rank) === match){
            filtered.push(player)
          }
        break;
        default:
          filtered.push('error no action matching '+match)
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
            <th>No.</th>
            <SortHeader title="Overall" sort={this.sortColumn} />
            <SortHeader title="First Name" sort={this.sortColumn} />
            <SortHeader title="Last Name" sort={this.sortColumn} />
            <SortHeader title="Position" sort={this.sortColumn} />
            <SortHeader title="Position Rank" sort={this.sortColumn} />
            <SortHeader title="Team" sort={this.sortColumn} />
            <SortHeader title="Bye" sort={this.sortColumn} />
            <SortHeader title="Bid" sort={this.sortColumn} />
          </tr>
        </thead>
        <tbody>
              <Players players={this.state.players} reset={this.resetPlayerStore} filter={this.filterCell} store={this.playerStore} isFiltered={this.state.isFiltered} />
        </tbody>
      </Table>
        )
    }
}

export default PlayerTable