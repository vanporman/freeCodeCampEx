/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Reverse the provided string.
 */

function reverseString(str) {
    //return str;
    var newArray = [];
    newArray = str.split("");
    var revArray = [];
    revArray = newArray.reverse();
    var revString = '';
    revString = revArray.join("");
    console.log(revString);
    return revString;
}

reverseString("hello");