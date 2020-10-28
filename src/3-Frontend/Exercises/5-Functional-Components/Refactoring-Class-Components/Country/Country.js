import React from 'react'
import { flexColumn, flag, border, country } from './Country.module.css'

export function Country({ country: { name, flag: flagURL } }) {
    return (
        <div className={`${border} ${country} ${flexColumn}`}>
            <img className={flag} src={flagURL} alt={`Bandeira de ${name}`} />
            <span className="text-center">{name}</span>
        </div>
    )
}
