import React from 'react'

const FilteredCell = (props) => {
    const Filtered = <td><strong>{props.cell_value}</strong></td>
    const filterClass = props.filtered ? 'filtered' : 'filterable'
    const UnFiltered = <td className={filterClass} onClick={()=>props.focus(props.cell_value)}><span>{props.cell_value}</span></td>

    return(
        props.filtered ? Filtered : UnFiltered
    )
}

export default FilteredCell