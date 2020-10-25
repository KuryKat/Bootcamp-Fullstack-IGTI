import React, { Component } from 'react'
import { formatNumber } from '../../utils/formatters'
import {
    border,
    flexRow,
    countriesCount,
    population,
} from './Header.module.css'

export default class Header extends Component {
    handleInputChange = event => {
        const { value } = event.target
        const { onChangeFilter } = this.props
        onChangeFilter(value)
    }
    render() {
        const { totalPopulation, filter, countryCount } = this.props
        return (
            <div className={`${flexRow} ${border}`}>
                <input
                    placeholder="Filtro"
                    autoFocus={true}
                    value={filter}
                    onChange={this.handleInputChange}
                    type="text"
                    name="searchInput"
                    id="searchCountry"
                />
                |<span className={countriesCount}>Países: {countryCount}</span>{' '}
                |
                <span className={population}>
                    População: {formatNumber(totalPopulation)}
                </span>
            </div>
        )
    }
}
