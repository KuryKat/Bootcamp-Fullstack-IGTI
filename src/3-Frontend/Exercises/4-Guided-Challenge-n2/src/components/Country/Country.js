import React, { Component } from 'react'
import { flexColumn, flag, border, country } from './Country.module.css'

export default class Country extends Component {
    render() {
        const {
            country: { name, flag: flagURL },
        } = this.props
        return (
            <div className={`${border} ${country} ${flexColumn}`}>
                <img
                    className={flag}
                    src={flagURL}
                    alt={`Bandeira de ${name}`}
                />
                <span className="text-center">{name}</span>
            </div>
        )
    }
}
