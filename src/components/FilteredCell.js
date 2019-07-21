import React from 'react'
import styled from 'styled-components'

const ScreenWrap = styled.span`
    transition: all .3s ease;
    :hover {
        cursor: pointer;
        color: #40798C
        transition: all .3s ease;
    }
`
const ScreenWrapCancel = styled.span`
    color: #40798C
    :hover {
        color: red;
    }
`

const FilteredCell = (props) => {
    const Filtered = <td onClick={props.reset}><ScreenWrap><ScreenWrapCancel>{props.screen}</ScreenWrapCancel></ScreenWrap></td>
    const UnFiltered = <td onClick={()=>props.filter(props.screen)}><ScreenWrap>{props.screen}</ScreenWrap></td>

    return(
        props.isFiltered ? Filtered : UnFiltered
    )
}

export default FilteredCell