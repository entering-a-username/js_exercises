// 22. write a function that retuns the first letters of two strings.
function shortcut(i, j){
    return `${i.charAt(0)}${j.charAt(0)}`;
}

// 23. write a function that returns first letter of a string (wihtout whitespace)
function firstChar(i){
    return `${i.trim().charAt(0)}`;
}

// 24. write a function that determines the 1st occurrence of the 2nd string in the 1st string. the function should be case insensitive.
function indexOfIgnoreCase(i, j){
    return i.toLowerCase().indexOf(j.toLowerCase());
}

// 25. write a function that determines the 2nd occurrence of the 2nd string in the 1st string. if the search string doesn't occur twice, return -1
function secondIndexOf(i, j) {
    let firstIndexOf = i.indexOf(j);
    return i.indexOf(j, firstIndexOf + 1);
}

// 26. write a function that takes string as a parameter and returns the 1st word in that string.
function firstWord(i){
    let indexOfSpace = i.indexOf(" ");
    return i.substr(0, indexOfSpace);
}

// 36. write a function that rounds a number to the nearest hundred.
function round100(i) {
    return Math.round(i / 100) * 100;
}

// 37. write a function that returns random natural number between 1 and 6.
function dice() {
    return Math.round(Math.random() * 5) + 1;
}

// 38. write a function that takes a string with + and returns its result as a number
function add(i){
    let firstNum = parseInt(i);
    let index = i.toString().indexOf("+"); // indexOf doesn't work when string is all numbers?
    let secondNum = i.toString().substr(index + 1);
    return firstNum + Number(secondNum); // finally
}

// 39. write a function that takes two Boolean values; if both values are true, return false. in other cases, return true.
function nand(i, j){ // use &&
    return !(i && j);
}

// 40. write a function that takes two Boolean values; if both values are false, return true. in other cases, return false.
function nor(i, j){
    return !(i || j);
}

// 43. write a function that checks 3 values for strict equality, return true if all three are equal.
function equals(i, j, k){
    return i === j && i === k;
}

// 45. write a function that checks 3 values for strict inequality, return true if all three values are strict unequal.
function unequal(i, j, k){
    return i !== j && i !== k & j !== k;
} // for more params?

// stopped at 48

// return i % 2 === 0;