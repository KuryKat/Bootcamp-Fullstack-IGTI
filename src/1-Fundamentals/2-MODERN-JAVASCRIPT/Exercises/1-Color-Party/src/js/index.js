const colors = ["red", "green", "blue"]

(() => {
    const button = document.querySelector("#button")

    button.addEventListener('click', () => {
        const span = document.createElement("span")

        span.innerHTML = "Olá Mundo"
        document.querySelector("#conteiner").appendChild(span)
    })

    let redSelected = 0
    let greenSelected = 0
    let blueSelected = 0

    setInterval(() => {
        function render() {
            document.querySelector("#red").innerHTML = `R: ${redSelected}`
            document.querySelector("#green").innerHTML = `G: ${greenSelected}`
            document.querySelector("#blue").innerHTML = `B: ${blueSelected}`
        }

        const spans = document.querySelectorAll('span')

        spans.forEach(item => {
            random = Math.floor(Math.random() * colors.length)
            const selectedColor = colors[random]
            item.style.color = selectedColor

            switch (selectedColor) {
                case "red":
                    redSelected++
                    render()
                    break;
                case "green":
                    greenSelected++
                    render()
                    break;
                case "blue":
                    blueSelected++
                    render()
                    break;
                default:
                    throw new Error("Deu algum erro impossível")
                    break;
            }
        })
    }, 500);
})()