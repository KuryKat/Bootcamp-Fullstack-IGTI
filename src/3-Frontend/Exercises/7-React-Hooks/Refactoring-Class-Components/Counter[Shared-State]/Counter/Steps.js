import React from 'react'
import css from './Counter.module.css'

export function Steps(props) {
    const { currentStep } = props
    return <span className={css.counterValue}>({currentStep})</span>
}
