function alwaysHungry(arr) {
    let foodCounter = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === 'food'){
            foodCounter++;
            console.log('Yummy!');
        }
        
    }
    if (foodCounter === 0){
        return console.log("I'm hungry!");
    }

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    sum = sum/arr.length;
    var count = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > sum){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

const arr = [1, 2, 3, 4, 5];


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n){
        let newArr = (fibArr[fibArr.length -1]) + (fibArr[fibArr.length -2]);
        fibArr.push(newArr);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
