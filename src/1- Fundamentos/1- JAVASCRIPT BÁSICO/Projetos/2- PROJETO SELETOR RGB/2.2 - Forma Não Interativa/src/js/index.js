window.addEventListener('load', start)

function start() {
    defineColor()

    let R = document.querySelector("#redRange")
    let G = document.querySelector("#greenRange")
    let B = document.querySelector("#blueRange")

    R.addEventListener('change', defineColor)
    G.addEventListener('change', defineColor)
    B.addEventListener('change', defineColor)
}


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