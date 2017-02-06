/**
 * Created by andreas on 06/02/2017.
 */

/*
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 */

function destroyer(arr) {
    // Remove all the values
    var newArr = [];
    newArr = Array.from(arr);
    console.log(newArr);
    var newArrLength = newArr.length;
    console.log(newArrLength);
    var lastElemnt = arr[newArr.length-1];
    console.log(lastElemnt);
    var nextToLastElem = arr[newArr.length-2];
    console.log(nextToLastElem);
    var newArr2 = [];
    for (var i in newArr){
        if (arr[i] !== lastElemnt && arr[i] !== nextToLastElem){
            newArr2.push(newArr[i])
        }
    }
    console.log(newArr2);
    // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer(["tree", "hamburger", 53], "tree", 53);
