;(() => {
    console.log('Heya!')

    const clickArray = []

    const button = document.querySelector('#clickButton')
    button.addEventListener('click', () => {
        clickArray.push(getDate())
        render()
    })

    function render() {
        const ul = document.querySelector('#data')
        ul.innerHTML = ''

        let lis = ''

        clickArray.map(item => {
            lis += `<li>${item}</li>`
        })

        ul.innerHTML = lis

        document.title = clickArray.length
    }
})()
