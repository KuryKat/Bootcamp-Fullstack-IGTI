(() => {
    console.log(doSpread()) // Espalha os elementos em um Objeto novo
    console.log(doRest()) // Cria um array de parâmetros pra uma função
    console.log(doDestructuring()) // Desestrutura elementos de um Objeto
})()

function doSpread() {
    const marriedMen = people.results.filter(person => person.name.title === "Mr")
    const marriedWom = people.results.filter(person => person.name.title === "Ms")

    return [...marriedMen, ...marriedWom]
}



function doRest() {
    function infinitySum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0)
    }
    return infinitySum(3, 2, 4, 5, 6, 8, 100, 293893, 21387281)
}

function doDestructuring() {
    const first = people.results[0]

    // Repetitivo e Massante
    // const username = first.login.username
    // const password = first.login.password

    //Usando Destructuring
    const { username, password } = first.login

    return { username: username, password: password }
}