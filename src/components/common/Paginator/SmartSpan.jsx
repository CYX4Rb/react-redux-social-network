import React from 'react'

const SmartSpan = (props) => {
    return <span className={props.style}
        onClick={() => { props.onPageChange(props.currentValue) }} >{props.currentValue}</span>
}

export default SmartSpan