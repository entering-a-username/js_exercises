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

// 48. write a function that determines whether a two-digit decimal is a repdigit or not.
function repdigit(i){
    if (i % 10 === Math.floor(i / 10)){
        return "Repdigit!"
    }
    return "No repdigit!"
} // for more digits?

// 49. write a function that adds two amounts with surcharge; for each amount less than or equal to 10 the surcharge is 1, else - 2.
function addWithSurcharge(i, j){
    let surcharge = 0;

    if (i <= 10){surcharge++;}
    else surcharge+=2;

    if(j <= 10){surcharge++;}
    else surcharge+=2;

    return i + j + surcharge;
}

// 55.

// 56. write a function that rotates the elements of an array - all elements should be moved one position to the left.
function rotate(arr){
    arr.push(arr.shift());
    return arr;
}

// 57. write a function that adds an element to the end of an array if that element isn't in the array already.
function add(arr, i){
    if (arr.indexOf(i) === -1){
        arr.push(i);
    } else return arr;
    return arr;
}

// 58. write a function that concatenates two arrays. the longer array should be appended to the shorter one. if they're equally long, the 2nd array should be appended to 1st one.
function concatUp(arr1, arr2){
    if (arr2.length >= arr1.length) return arr1.concat(arr2);
    return arr2.concat(arr1);
} // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWw

// 59. write a function that copies the first half of an array. with an odd number of array elements, the middle element should belong to the first half.
function halve(arr){
    if (arr.length % 2 === 0) return arr.slice(0, arr.length / 2);
    return arr.slice(0, arr.length / 2 + 1);
}

// 60. write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and the last word by an end. an empty array returns an empty string.
function list(arr){

} // stopped here


// in general, multiple different separators?? separators = [",", "and"]




// return i % 2 === 0;

// https://www.jshero.net/en/success.html


function sort(arr){
    let emptyArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let k = 0; k < arr.length; k++){
            
        }
    }

    return emptyArr;
}
console.log(sort([4, 1, 3, 20, 16, -2000, 59, 900]))
// https://stackoverflow.com/questions/16243366/sorting-array-with-numbers-without-sort-method

