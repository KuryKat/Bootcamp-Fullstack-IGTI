;(async () => {
    console.log('Heya!')
    const users = await fetchUsers()

    function start() {
        const searchForm = document.querySelector('#nameSearch')
        const searchInput = searchForm.querySelector('#searchInput')
        const searchButton = searchForm.querySelector('#searchButton')
        cleanInput()

        searchForm.addEventListener('submit', _ => _.preventDefault())
        searchButton.addEventListener('click', _ => search(users))
        searchInput.addEventListener('keyup', ({ key, target }) => {
            const handleSubmit = !!target.value && target.value.trim() !== ''
            searchInput.value.length > 0 && handleSubmit
                ? searchButton.classList.remove('disabled')
                : searchButton.classList.add('disabled')
            key === 'Enter' && handleSubmit ? search(users) : null
        })
    }
    start()

    // Troca de Temas
    const themeButton = document.querySelector('#themeButton')
    themeButton.addEventListener('click', () => changeTheme())

    async function fetchUsers() {
        //const response = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
        // const data = await response.json()
        const arr = data.results

        const filteredInfo = arr.map(
            ({
                name: { first, last },
                dob: { age },
                gender,
                picture: { large },
            }) => {
                return {
                    name: `${first} ${last}`,
                    gender,
                    age,
                    photo: large,
                }
            }
        )

        return filteredInfo
    }

    /**
     * Search users based on the desired string on the searchInput
     * @param {Array<{name: String, gender: String, age: Number, photo: String}>} users
     */
    function search(users) {
        const searchForm = document.querySelector('#nameSearch')
        const searchInput = searchForm.querySelector('#searchInput')
        const searchedString = searchInput.value.trim()
        const filtroDiv = document.querySelector('#divFiltro')
        filtroDiv.textContent = ''

        let results = users.filter(({ name }) => {
            let found = name.toLowerCase().match(searchedString.toLowerCase())
            return found
        })
        results.sort((a, b) => a.name.localeCompare(b.name))
        results.length === 0
            ? (results = [{ name: null, gender: null, age: null, photo: null }])
            : results
        cleanInput()
        filtroDiv.textContent = `Filtro Aplicado: ${searchedString}`
        render(results)
    }

    /**
     * Render all Elements
     * @param {Array<{name: String, gender: String, age: Number, photo: String}>} users
     */
    function render(users) {
        loading()
        setTimeout(() => {
            renderResults(users)
            renderSummary(users)
            start()
        }, 3000)
    }

    /**
     * Render the Results in the User Screen
     * @param {Array<{name: String, gender: String, age: Number, photo: String}>} users
     */
    function renderResults(users) {
        const resultsDiv = document.querySelector('#userResults')
        const title = resultsDiv.querySelector('.title')
        title.textContent = 'Usuários Encontrados:'

        const results = resultsDiv.querySelector('#results')
        results.innerHTML = ''

        users.forEach(({ name, age, photo }) => {
            const resultDiv = document.createElement('div')
            resultDiv.classList.add('result')
            resultDiv.classList.add('col')
            resultDiv.classList.add('s8')
            name === null ? (name = 'Usuário Não encontrado') : name
            photo === null ? (photo = './icons/search-24px.svg') : photo

            const profilePic = document.createElement('img')

            profilePic.src = `${photo}`
            profilePic.classList.add('profile-picture')
            profilePic.alt = `Foto de ${name}`

            const userInfor = document.createElement('div')

            age === null
                ? (userInfor.textContent = `${name}`)
                : (userInfor.textContent = `${name}, ${age} anos`)
            userInfor.classList.add('informations')

            resultDiv.appendChild(profilePic)
            resultDiv.appendChild(userInfor)

            results.appendChild(resultDiv)
        })
    }

    /**
     * Render the summary in the User Screen
     * @param {Array<{name: String, gender: String, age: Number, photo: String}>} users
     */
    function renderSummary(users) {
        const findLength = users.length
        const sumAges = users.reduce((acc, curr) => acc + curr.age, 0)
        const averageAges = sumAges / users.length
        let maleCount = users.filter(({ gender }) => gender === 'male').length
        let femaleCount = users.filter(({ gender }) => gender === 'female')
            .length

        const summaryDiv = document.querySelector('#summary')
        const content = document.querySelector('#summaryContent')

        const title = summaryDiv.querySelector('.title')
        title.textContent = `Estatísticas: (${findLength} Usuários encontrados)`

        const summaryInfo = document.createElement('div')
        summaryInfo.id = 'summaryInfo'
        summaryInfo.classList.add('col')
        summaryInfo.classList.add('s12')

        const maleCountHTML = document.createElement('li')
        maleCountHTML.textContent = `Sexo Masculino: ${maleCount}`

        const femaleCountHTML = document.createElement('li')
        femaleCountHTML.textContent = `Sexo Feminino: ${femaleCount}`

        const sumAgesHTML = document.createElement('li')
        sumAgesHTML.textContent = `Soma das idades: ${sumAges}`

        const averageAgesHTML = document.createElement('li')
        averageAgesHTML.textContent = `Média das idades: ${averageAges.toFixed(
            2
        )}`

        const summaryUL = document.createElement('ul')
        summaryUL.appendChild(maleCountHTML)
        summaryUL.appendChild(femaleCountHTML)
        summaryUL.appendChild(sumAgesHTML)
        summaryUL.appendChild(averageAgesHTML)

        const ChildList = Array.from(content.childNodes)
        ChildList.length > 0 && ChildList[0].id === 'summaryInfo'
            ? content.removeChild(content.childNodes.item(0))
            : null

        summaryInfo.appendChild(summaryUL)
        content.appendChild(summaryInfo)
        summaryDiv.appendChild(content)
    }

    function loading() {
        const searchForm = document.querySelector('#nameSearch')
        const search = searchForm.querySelector('#searchPosition')
        const temp = search.innerHTML
        const loading = `<div class="col s12 center" id="loading"><div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div>`
        search.innerHTML = loading

        setTimeout(() => {
            search.innerHTML = temp
        }, 2000)
    }

    function cleanInput() {
        const searchForm = document.querySelector('#nameSearch')
        const searchInput = searchForm.querySelector('#searchInput')
        const searchButton = searchForm.querySelector('#searchButton')

        searchInput.value = ''
        searchInput.focus()
        searchButton.classList.remove('disabled')
        searchButton.classList.add('disabled')
    }

    function changeTheme() {
        const themeButton = document.querySelector('#themeButton')
        const body = document.querySelector('body')
        const actualTheme = body.classList.item(0)
        let newTheme = ''
        let themeText = ''

        console.log(actualTheme)
        console.log(newTheme)

        actualTheme === 'light-theme'
            ? (newTheme = 'dark-theme')
            : (newTheme = 'light-theme')
        newTheme === 'dark-theme'
            ? (themeText = '🌚 Tema Escuro')
            : (themeText = '🌞 Tema Claro')

        themeButton.textContent = themeText
        body.classList.remove(actualTheme)
        body.classList.add(newTheme)
    }
})()
