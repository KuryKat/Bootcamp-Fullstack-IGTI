function getDate() {
    const now = new Date()
    let result = ""

    result += leftPad(now.getDate())
    result += "/"
    result += leftPad(now.getMonth() + 1)
    result += "/"
    result += now.getFullYear()
    result += " - "
    result += leftPad(now.getHours())
    result += ":"
    result += leftPad(now.getMinutes())
    result += ":"
    result += leftPad(now.getSeconds())
    result += "."
    result += leftPad(now.getMilliseconds(), 3)

    return result
}

function leftPad(value, count = 2, char = '0') {
    value = value.toString()
    let newValue = value
    if (value.length < count) {
        for (let i = 0; i < count - value.length; i++) {
            newValue = char + value
        }
    }
    return newValue
}