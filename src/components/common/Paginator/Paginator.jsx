import React, { useState } from 'react'
import s from './Paginator.module.css'
import SmartSpan from './SmartSpan'

const Paginator = ({ totalCount, pageSize, currentPage, onPageChange }) => {
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return  <div className={s.pageCount} >
        {currentPage > 5
            ? <SmartSpan className = {s.buttonStyle}
                onPageChange={onPageChange}
                className={`${s.unSelected}  ${s.first}`}
                currentValue={1} />
            : null
        }
        {pages
            .filter(e => e > currentPage - 5 && e < currentPage + 5)
            .map(p => {
                return <SmartSpan
                    onPageChange={onPageChange}
                    className={currentPage === p ? s.selected : s.unSelected}
                    currentValue={p} />
            })}
        {currentPage < pages[pages.length - 5]
            ? <SmartSpan
                onPageChange={onPageChange}
                className={`${s.unSelected}  ${s.last}`}
                currentValue={pages[pages.length - 1]} />
            : null}
    </div>
}

export default Paginator