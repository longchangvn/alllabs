'use strict'
function max(a, b) {
    if (a > b) {
        return a;
    }
    else
        return b;
}

function maxOfThree(a, b, c) {
    let max = a;
    let arr = [a, b, c]
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element > max) {
            max = element;
        }
    }

    return max;
}
function isVowel(c) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    return arr.indexOf(c.toLocaleLowerCase()) >= 0
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        total += element;
    }
    return total;
}

function multiply(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        total *= element;
    }
    return total;
}

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function findLongestWordLength(arr) {
    let maxlen = 0;
    let maxlenItem = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= maxlen) {
            maxlen = arr[i].length;
            maxlenItem = arr[i];
        }
    }
    return maxlenItem;
}


function filterLongWords(arr, i) {
    return arr.filter(e => e.length > i);
}

function computeSumOfSquares(arr) {
    return arr.reduce((s, e) => s += e * e,0);
}

function printOddNumbersOnly(arr) {
    return arr.filter(e => e % 2 != 0);
}

function computeSumOfSquaresOfEvensOnly(arr) {
    let localArr = arr.filter(e => e % 2 == 0);
    return localArr.reduce((s, e) => s + e * e,0)
}

function sumReduce(arr) {
    return arr.reduce((s, e) => s + e);
}


function multiplyReduce(arr) {
    return arr.reduce((s, e) => s * e);
}


function printFibo(n, a, b) {
    let num1 = a;
    let num2 = b;
    let arr = [a, b]
    for (let i = 2; i < n; i++) {
        let nextNum = num1 + num2;
        arr[arr.length] = nextNum;
        num1 = num2;
        num2 = nextNum;
    }
    return arr;
}

