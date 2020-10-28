import React from 'react'
import { formatNumber } from '../../utils/formatters'
import {
    border,
    flexRow,
    countriesCount,
    population,
} from './Header.module.css'

export function Header({
    onChangeFilter,
    totalPopulation,
    filter,
    countryCount,
}) {
    const handleInputChange = ({ target: { value } }) => {
        onChangeFilter(value)
    }
    return (
        <div className={`${flexRow} ${border}`}>
            <input
                placeholder="Filtro"
                autoFocus={true}
                value={filter}
                onChange={handleInputChange}
                type="text"
                name="searchInput"
                id="searchCountry"
            />
            |<span className={countriesCount}>Países: {countryCount}</span> |
            <span className={population}>
                População: {formatNumber(totalPopulation)}
            </span>
        </div>
    )
}
