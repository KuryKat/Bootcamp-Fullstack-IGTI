;(async () => {
    // fetch() // Forma Convencional
    // fetchAsync() // Forma Otimizada

    // Forma Convencional
    divisionPromise(12, 0)
        .then(result => console.log(result))
        .catch(error => console.error(error))

    // Forma Otimizada
    const result = await divisionPromise(12, 2)
    console.log(result)
})()

function fetch() {
    fetch('https://api.github.com/users/kurykat').then(response => {
        response.json().then(data => console.log(data))
    })
}

async function fetchAsync() {
    const response = await fetch('https://api.github.com/users/kurykat')
    const data = await response.json()
    console.log(data)
}

function divisionPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) reject('Não é possível dividir por 0')
        resolve(a / b)
    })
}
