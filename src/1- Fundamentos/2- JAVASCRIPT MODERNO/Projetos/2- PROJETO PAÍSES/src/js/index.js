(async() => {
    let favoriteCountries = []

    let tabCountries = document.querySelector("#tabCountries")
    let tabFavorites = document.querySelector("#tabFavorites")

    let countCountries = document.querySelector("#countCountries")
    let countFavorites = document.querySelector("#countFavorites")

    let totalPopulationList = document.querySelector("#totalPopulationList")
    let totalPopulationFavorites = document.querySelector("#totalPopulationFavorites")

    let numberFormat = Intl.NumberFormat('pt-BR')

    let allCountries = await fetchCountries()
    render()

    /**
     * Function that fetch all countries and returns an Object with only the needed informations
     * @returns {{id: Number, name: String, population: Number, formattedPopulation: String, flag: String }} 
     * @example async () => let countries = await fetchCountries()
     */
    async function fetchCountries() {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        let preventNullValues = data.filter(country => country.numericCode !== null)

        let allCountries = preventNullValues.map(({ numericCode, translations, population, flag }) => {
            return {
                id: numericCode,
                name: translations.br,
                population: population,
                formattedPopulation: formatNumber(population, numberFormat),
                flag: flag
            }

        })
        return allCountries
    }

    /**
     * Render All Elements in the User Interface
     */
    async function render() {
        renderCountryList()
        renderFavoriteList()
        renderSummary()

        handleCountryButtons()
    }

    /**
     * Render the CountryList in the tab of all countries
     */
    function renderCountryList() {
        let countriesHTML = `<div>`

        allCountries.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })

        allCountries.forEach(({ id, name, formattedPopulation, flag }) => {
            const countryHTML = `
                <div class="country">
                    <div>
                        <a id="${id}" class="waves-effect waves-light btn">+</a>
                    </div>
                    <div>   
                        <img src="${flag}" alt="Bandeira de ${name}">
                    </div>
                    <div>
                        <ul>
                            <li>${name}</li>
                            <li>${formattedPopulation}</li>
                        </ul>
                    </div>
                </div>
            `
            countriesHTML += countryHTML
        })
        countriesHTML += `</div>`
        tabCountries.innerHTML = countriesHTML
    }

    /**
     * Render the FavoriteList in the tab of the favorite countries
     */
    function renderFavoriteList() {
        let favoritesHTML = `<div>`

        favoriteCountries.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })

        favoriteCountries.forEach(({ id, name, formattedPopulation, flag }) => {
            const favoriteCountryHTML = `
                <div class="country">
                    <div>
                        <a id="${id}" class="waves-effect waves-light btn red darken-4">-</a>
                    </div>
                    <div>   
                        <img src="${flag}" alt="Bandeira de ${name}">
                    </div>
                    <div>
                        <ul>
                            <li>${name}</li>
                            <li>${formattedPopulation}</li>
                        </ul>
                    </div>
                </div>
            `
            favoritesHTML += favoriteCountryHTML
        })


        favoritesHTML += `</div>`
        tabFavorites.innerHTML = favoritesHTML
    }

    /**
     * Render the Summary of all statistics from favorite countries and countries (Numbers)
     */
    function renderSummary() {
        countCountries.textContent = allCountries.length
        countFavorites.textContent = favoriteCountries.length

        const totalPopulation = allCountries.reduce((acc, curr) => {
            return acc + curr.population
        }, 0)

        const totalFavorites = favoriteCountries.reduce((acc, curr) => {
            return acc + curr.population
        }, 0)

        totalPopulationList.textContent = formatNumber(totalPopulation, numberFormat)
        totalPopulationFavorites.textContent = formatNumber(totalFavorites, numberFormat)
    }

    /**
     * Handle with the Buttons to add and remove a favorite Country
     */
    function handleCountryButtons() {
        const countryButtons = Array.from(tabCountries.querySelectorAll(".btn"))
        const favoriteButtons = Array.from(tabFavorites.querySelectorAll(".btn"))

        countryButtons.forEach(button => {
            button.addEventListener('click', () => addToFavorites(button.id))
        })

        favoriteButtons.forEach(button => {
            button.addEventListener('click', () => removeFromFavorites(button.id))
        })
    }

    /**
     * Add a country in the FavoriteList
     * @param {Number} id 
     */
    function addToFavorites(id) {
        const countryToAdd = allCountries.find(country => country.id === id)
        favoriteCountries = [...favoriteCountries, countryToAdd]

        allCountries = allCountries.filter(country => country.id !== id)
        render()
    }

    /**
     * Remove a country from the FavoriteList
     * @param {Number} id 
     */
    function removeFromFavorites(id) {
        const countryToRemove = favoriteCountries.find(country => country.id === id)
        allCountries = [...allCountries, countryToRemove]

        favoriteCountries = favoriteCountries.filter(country => country.id !== id)
        render()
    }

    /**
     * Format a number according to the indicated Intl NumberFormat
     * @param {Number} number 
     * @param {Intl.NumberFormat} intlFormatter 
     * @returns {String} The Formatted Number
     * @example formatNumber(10823, Intl.NumberFormat('pt-BR')) // => "10.823"
     */
    function formatNumber(number, intlFormatter) {
        return intlFormatter.format(number)
    }

})()