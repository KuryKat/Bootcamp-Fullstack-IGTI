import React from 'react'
import css from './Counter.module.css'

export function Value(props) {
    const { value } = props
    return <span className={css.counterValue}>{value}</span>
}
