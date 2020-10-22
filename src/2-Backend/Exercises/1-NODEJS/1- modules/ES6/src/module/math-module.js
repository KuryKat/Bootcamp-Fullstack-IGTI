const somaBolada = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0)

const soma = (a, b) => a + b

const subs = (a, b) => a - b

export const division = (a, b) => {
    b === 0 ? (b = 1) : null
    return a / b
}

export default {
    somaBolada,
    soma,
    subs,
}
