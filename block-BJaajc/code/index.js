function getFullName(firstName, lastName){
    return fullName = `${firstName} ${lastName}`
}



function isPalindrome(word){
    if(word.split("").reverse().join("") == word){
        return true
    } else {
        return false
    }
}

function getCircumfrence(radius){
    let circumference = (2 * 22 * radius ) / 7 
    return `The circumference is ${circumference}`
}

function getArea(radius){
    let area = ((22 * radius ) / 7)**2
    return `The area is ${area}`
}


module.exports = {
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea,
}

