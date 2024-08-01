module.exports = function reverse(n) {
    const convertToString = String(n)
    let convertToArray = convertToString.split('')
    let arrayLength = convertToArray.length
    let arrayIndex = 0
    let reverseArray = []
    while (arrayIndex < arrayLength) {
        reverseArray.unshift(convertToArray[arrayIndex])
        arrayIndex++
    }
    reverseString = reverseArray.join('')
    reverseNumber = parseInt(reverseString)
    return reverseNumber
}