import React, { Component } from 'react'
import css from './Counter.module.css'

export default class Value extends Component {
    render() {
        const { value } = this.props
        return <span className={css.counterValue}>{value}</span>
    }
}
