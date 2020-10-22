;(() => {
    const button = window.document.querySelector('#button')
    button.addEventListener('click', () => handleInterval())
})()

const handleInterval = () => {
    let count = 0
    let interval = setInterval(() => {
        timer.textContent = ++count
    }, 1000)

    if (count === 10) clearInterval(interval)
}
