import React from 'react'
import styled from 'styled-components'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

const TH = styled.th`
    :hover {
        cursor: pointer;
    }
`

class Sortable extends React.Component {
    state = {
        sortASC: true
    }
    render() {
        return(
                <TH onClick={()=>{
                        this.props.sort(this.state.sortASC);
                        this.setState(prev=>{
                            return {
                                sortASC: !prev.sortASC
                            }
                        })
                }}>
                    {this.props.title}
                    {this.state.sortASC ? <FaCaretDown /> : <FaCaretUp />}
                </TH>
        )
    }
}

export default Sortable