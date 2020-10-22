;(() => {
    console.log(doMap()) // Faz um novo Objeto mapeando pela condição no callback
    console.log(doFilter()) // Faz um novo Objeto removendo os objetos filtrados no callback
    console.log(doForEach()) // Faz um laço por cada um dos objetos executando uma função callback
    console.log(doReduce()) // Faz uma somatória (ver sintaxe)
    console.log(doFind()) // Retorna o PRIMEIRO Objeto encontrado
    console.log(doSome()) // Retorna True or False para a condição indicada
    console.log(doEvery()) // Apenas retorna True se TODOS elementos retornem true para a condição indicada
    console.log(doSort()) // Ordena um Objeto por uma condição de ordenação (Default: String Organization)
})()

function doMap() {
    const nameEmailArray = people.results.map(person => {
        return {
            name: person.name,
            email: person.email,
        }
    })
    return nameEmailArray
}

function doFilter() {
    const olderThan50 = people.results.filter(person => {
        return person.dob.age > 50
    })
    return olderThan50
}

function doForEach() {
    const mappedPeople = doMap()
    mappedPeople.forEach(person => {
        person.nameSize =
            person.name.title.length +
            person.name.first.length +
            person.name.last.length
    })
    return mappedPeople
}

function doReduce() {
    const totalAges = people.results.reduce((acc, curr) => {
        return acc + curr.dob.age
    }, 0)
    return totalAges

    // O MÉTODO </REDUCE> SUBSTITUI ISSO AQUI:
    //
    // let sumAges = 0
    // for (let i = 0; i < people.results.length; i++) {
    //     let current = people.results[i]
    //     sumAges += current.dob.age
    // }
    // return sumAges
}

function doFind() {
    const found = people.results.find(
        person => person.location.state === 'Minas Gerais'
    )
    return found
}

function doSome() {
    const found = people.results.some(
        person => person.location.state === 'Amazonas'
    )
    return found
}

function doEvery() {
    const every = people.results.every(person => person.nat === 'BR')
    return every
}

function doSort() {
    const mappedNames = people.results
        .map(person => {
            return {
                name: person.name.first,
            }
        })
        .filter(person => person.name.startsWith('A'))

    mappedNames.sort((a, b) => {
        //Por String
        return a.name.localeCompare(b.name)
        // Por quantidade de Letras
        // return a.name.length - b.name.length
    })

    return mappedNames
}
