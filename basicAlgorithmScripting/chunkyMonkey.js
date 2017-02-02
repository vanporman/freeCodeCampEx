/**
 * Created by andreas on 02/02/2017.
 */
 /*
  * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  */

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var twoDimArr = [];
    var i = 0;

    while (i < arr.length) {
        twoDimArr.push(arr.slice(i, i+size));
        i += size;
    }

    console.log(twoDimArr);
    return twoDimArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);