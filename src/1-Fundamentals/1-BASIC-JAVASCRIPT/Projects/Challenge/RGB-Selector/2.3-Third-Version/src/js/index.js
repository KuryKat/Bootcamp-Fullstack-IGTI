(() => {
    defineColor()

    let R = document.querySelector("#redRange")
    let G = document.querySelector("#greenRange")
    let B = document.querySelector("#blueRange")

    R.addEventListener('input', defineColor)
    G.addEventListener('input', defineColor)
    B.addEventListener('input', defineColor)
})()


function defineColor() {
    let body = document.querySelector("body")
    let redUI = document.querySelector("#redUI")
    let greenUI = document.querySelector("#greenUI")
    let blueUI = document.querySelector("#blueUI")


    let R = document.querySelector("#redRange")
    let G = document.querySelector("#greenRange")
    let B = document.querySelector("#blueRange")

    body.style.backgroundColor = `rgb(${R.value},${G.value},${B.value})`;
    redUI.value = R.value
    greenUI.value = G.value
    blueUI.value = B.value
}