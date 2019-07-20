import React from 'react'
import { Table } from 'react-bootstrap'
import Player from './Player'

import t300 from '../espn'

class PlayerTable extends React.Component {
    state = {
        isFiltered: false,
        filteredValue: null,
        isMatched: false
    }
    selectFilterFocus = (val) => {
        this.setState(
            state=>{
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
            <th>Overall</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Pos. Rank</th>
            <th>Team</th>
            <th>Bye</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>
          {
            t300.map(player=>(
              <Player focus={this.selectFilterFocus} key={player.rank} player={player} isFiltered={false}/>
            ))
          }
        </tbody>
      </Table>
        )
    }
}

export default PlayerTable