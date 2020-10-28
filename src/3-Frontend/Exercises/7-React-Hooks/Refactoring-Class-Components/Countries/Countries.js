import React from 'react'
import Country from '../Country/Country'
import { border, flexRow } from './Countries.module.css'

export function Countries({ countries }) {
    return (
        <div className={`${border} ${flexRow}`}>
            {countries.map(country => {
                return <Country key={country.id} country={country} />
            })}
        </div>
    )
}
