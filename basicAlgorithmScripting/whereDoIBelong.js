/**
 * Created by andreas on 14/02/2017.
 */

/*
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
 * once it has been sorted. The returned value should be a number.
 */

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    console.log(num);
    function compareNumbers(a, b) {
        return a - b;
    }

    var myArray = arr.sort(compareNumbers);
    console.log(myArray);

    var numberIndex;
    for (var i in myArray){
        if (myArray[0] >= num){
            myArray.unshift(num);
            numberIndex = i;
            console.log("See " + numberIndex);
            break;
        }
        else if (myArray[i] >= num) {
            console.log(i + ": " + myArray[i]);
            myArray.splice(i, 0, num);
            numberIndex = i;
            console.log("Nyyd see " + numberIndex);
            break;
        }

        else if (myArray[myArray.length-1] < num) {
            myArray.push(num);
            numberIndex = myArray.length-1;
            console.log("Aga nyyd see " + numberIndex);
            break;
        }
    }
    console.log(myArray);
    console.log(numberIndex);
    return numberIndex;

}

// getIndexToIns([10, 20, 30, 40, 50], 35); //vastus 3
getIndexToIns([10, 20, 30, 40, 50], 30); //vastus 2
// getIndexToIns([40, 60], 50); //vastus 1
// getIndexToIns([3, 10, 5], 3); //vastus 0
// getIndexToIns([5, 3, 20, 3], 5); // vastus 2
// getIndexToIns([2, 20, 10], 19); // vastus 2
// getIndexToIns([2, 5, 10], 15); // vastus 3