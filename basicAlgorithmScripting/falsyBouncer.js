/**
 * Created by andreas on 03/02/2017.
 */

/*
 * Remove all falsy values from an array.
 *
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newArray = [];
    for (var i in arr){
        if (arr[i] !== undefined && arr[i] !== "" && typeof(arr[i]) === 'string' || typeof(arr[i]) === 'number' && !isNaN(arr[i]) && arr[i] !== 0){
            // console.log(arr[i]);
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
    return newArray;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);