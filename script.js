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
    let lastWord = arr[arr.length - 1];
    let notLastWord = arr.slice(0, arr.length - 1);

    if (!(arr.length === 0)) {
        if (arr.length === 1) return arr[0];
        else return notLastWord.join(", ") + " and " + lastWord;
    }
    return "";
}

// 62. write a function that takes an array of ascending numbers and returns the median of those numbers.
function median(arr){
    if (arr.length % 2 === 0){
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2])/2;
    } else if (arr.length === 1) return arr[0];
    return arr[Math.round(arr.length / 2 - 1)];
}

// 64. write a function that takes one line of JS and returns a possible line comment trimmed. we assume that the code doesn't contain the comment characters within a string.
function cutComment(i) {
    if(i.includes("//")){
        let index = i.indexOf("/");
        return i.substr(index + 2).trim();
    }
    return null;
}

// 66. write a function that calculates the factorial of a positive integer.
function factorial(j) {
    let factorial = 1;
    for (let i = 1; i <= j; i++){
        factorial *= i;
    }
    return factorial;
}

// 67. write a function that accepts an array filled with numbers and returns the arithmetic mean of those numbers.
function mean(arr){
    let sum = 0;
    if (arr.length === 1) return arr[0];
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

// 68. write a function that takes a natural number and returns a string of that many spaces.
function spaces(j){
    let str = "";
    let i = 0;
    if (j === 0) return str;
    do {
        i++;
        str += " ";
    } while (i < j)
    return str;
}

// 69. write a function that takes two natural numbers and calculates their lcm (least common multiple).
function lcm(j, k){
    let i = 1; // cant be 0
    while (true) {
        if (i % j === 0 && i % k === 0){
            break;
        } i++;
    }
    return i;
}

// 70. write a function that takes two natural numbers and calculates their gcd (greatest common divisor).
function gcd(j, k){
    let i;
    if (j > k) {i = j}
    else i = k;

    while (true) {
        if (j % i === 0 && k % i === 0) {
            break;
        } i--;
    }
    return i;
}

// 71. write a function that checks whether a passed number is prime.
function isPrime(j){
    let dividors = [];
    for (let i = 0; i <= j; i++){
        if (j % i === 0) dividors.push(i);
    }
    if (dividors.length !== 2) return false;
    return true;
}

// 72. write a function that calculates the sum of all elements of a two-dimensional array.
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
    }
    return sum;
}

// 55
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

