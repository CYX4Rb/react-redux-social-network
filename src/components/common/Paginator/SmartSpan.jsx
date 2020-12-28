import React from 'react'
import { NavLink } from 'react-router-dom'

const SmartSpan = ({ className, onPageChange, currentValue }) => {
    return <NavLink to={'/Users/' + currentValue}  >
        <span className={className}
            onClick={() => { onPageChange(currentValue) }} >{currentValue}</span>
    </NavLink>
}

export default SmartSpan