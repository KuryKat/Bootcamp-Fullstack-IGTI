const addClass = (element, className, callback = null) => {
    element.classList.add(className)
    if (callback !== null && typeof callback === 'function') return callback()
}

const removeClass = (element, className, callback = null) => {
    element.classList.remove(className)
    if (callback !== null && typeof callback === 'function') return callback()
}

const changeClass = (element, oldclassName, newclassName, callback = null) => {
    removeClass(element, oldclassName, () => {
        addClass(element, newclassName)
    })
    if (callback !== null && typeof callback === 'function') return callback()
}

export { addClass, removeClass, changeClass }
