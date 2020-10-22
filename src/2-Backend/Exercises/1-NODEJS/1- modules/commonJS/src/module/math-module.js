const somaBolada = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0)

const soma = (a, b) => a + b

const subs = (a, b) => a - b

const division = (a, b) => {
    b === 0 ? (b = 1) : null
    return a / b
}

module.exports = {
    somaBolada,
    soma,
    subs,
    division,
}
