/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

function largestOfFour(arr) {
    // You can do this!
    var newArray = [];
    for (var i  = 0; i < arr.length; i++){
        console.log(arr[i]);
        var biggest = Math.max.apply(null, arr[i]);
        newArray.push(biggest);

    }
    console.log(newArray);
    return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);