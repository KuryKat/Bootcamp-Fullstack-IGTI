(() => {
    console.log('Heya!')

    const clickArray = []

    const button = document.querySelector('#clickButton')
    button.addEventListener('click', () => {
        const item = getDate()
        clickArray.push(item)
        render(item)
    })

    function render(item) {
        const ul = document.querySelector('#data')

        const li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)

        document.title = clickArray.length
    }
})()