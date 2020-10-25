import React, { Component } from 'react'
import { data } from './data/allCountries'
import Countries from './components/Countries/Countries'
import Header from './components/Header/Header'
import SwitchButton from './components/SwitchButton/SwitchButton'
import { addClass, removeClass } from './utils/styleFunctions'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            allCountries: [],
            filteredCountries: [],
            filteredPopulation: 0,
            filter: '',
            theme: '🌞',
        }
    }
    calculatePopulationFrom = countries => {
        const totalPopulation = countries.reduce((acc, curr) => {
            return acc + curr.population
        }, 0)

        return totalPopulation
    }

    async componentDidMount() {
        setTimeout(() => {
            document.title = 'React Countries - Desafio 02'
        }, 700)

        // const res = await fetch('https://restcountries.eu/rest/v2/all')
        // const data = await res.json()
        const allCountries = data.map(
            ({
                translations: { br: name },
                population,
                flag,
                numericCode: id,
            }) => {
                return {
                    id,
                    name,
                    filterName: name.toLowerCase(),
                    population,
                    flag,
                }
            }
        )

        allCountries.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })

        const filteredPopulation = this.calculatePopulationFrom(allCountries)
        this.setState({
            allCountries,
            filteredCountries: allCountries,
            filteredPopulation,
        })
    }

    handleChangeFilter = newFilter => {
        const filterLowerCase = newFilter.toLowerCase()
        const { allCountries } = this.state
        this.setState({ filter: newFilter })

        const filteredCountries = allCountries.filter(country => {
            return country.filterName.includes(filterLowerCase)
        })
        const filteredPopulation = this.calculatePopulationFrom(
            filteredCountries
        )

        this.setState({ filteredCountries, filteredPopulation })
    }

    handleChangeTheme = isChecked => {
        const body = document.querySelector('body')
        if (isChecked) {
            this.setState({ theme: '🌚' })

            removeClass(body, 'light-theme')
            addClass(body, 'dark-theme')
        } else {
            this.setState({ theme: '🌞' })

            removeClass(body, 'dark-theme')
            addClass(body, 'light-theme')
        }
    }

    render() {
        const {
            filteredCountries,
            filter,
            filteredPopulation,
            theme,
        } = this.state
        return (
            <div className="container">
                <SwitchButton
                    onToggle={this.handleChangeTheme}
                    description="Alterar Tema:"
                    theme={theme}
                />
                <h1 className="text-center">React Countries</h1>
                <Header
                    countryCount={filteredCountries.length}
                    totalPopulation={filteredPopulation}
                    filter={filter}
                    onChangeFilter={this.handleChangeFilter}
                />
                <Countries countries={filteredCountries} />
            </div>
        )
    }
}

// const styles = {
//     title: {
//         textAlign: 'center',
//     },
// }
/* <h1 style={styles.title}>React Countries</h1> */
