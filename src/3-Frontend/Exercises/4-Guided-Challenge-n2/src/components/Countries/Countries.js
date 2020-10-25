import React, { Component } from 'react'
import Country from '../Country/Country'
import { border, flexRow } from './Countries.module.css'

export default class Countries extends Component {
    render() {
        const { countries } = this.props
        return (
            <div className={`${border} ${flexRow}`}>
                {countries.map(country => {
                    return <Country key={country.id} country={country} />
                })}
            </div>
        )
    }
}
