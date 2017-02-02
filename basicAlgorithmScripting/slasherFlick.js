/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Return the remaining elements of an array after chopping off n elements from the head.
 *
 * The head means the beginning of the array, or the zeroth index.
 */

function slasher(arr, howMany) {
    var slicedArray = arr.slice(howMany);
    console.log(slicedArray);
    return slicedArray;
}

slasher([1, 2, 3], 2);