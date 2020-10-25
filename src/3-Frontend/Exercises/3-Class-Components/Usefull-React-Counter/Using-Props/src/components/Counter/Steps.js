import React, { Component } from 'react'
import css from './Counter.module.css'

export default class Steps extends Component {
    render() {
        const { currentStep } = this.props
        return <span className={css.counterValue}>({currentStep})</span>
    }
}
