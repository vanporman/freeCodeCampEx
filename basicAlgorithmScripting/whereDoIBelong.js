/**
 * Created by andreas on 14/02/2017.
 */

/*
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
 * once it has been sorted. The returned value should be a number.
 */

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    function compareNumbers(a, b) {
        return a - b;
    }

    var myArray = arr.sort(compareNumbers);
    console.log(myArray);
    // return num;
}

getIndexToIns([40, 60], 50); //vastus 1
getIndexToIns([5, 3, 20, 3], 5); // vastus 2