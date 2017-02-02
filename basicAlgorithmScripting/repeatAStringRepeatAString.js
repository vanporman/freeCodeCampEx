/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
    // repeat after me
    var str1 = '';
    if (num < 0){
        str1 = '';
    }
    else {
        for (var i = 0; i < num; i++){
            str1 += str;
        }
    }
    console.log(str1);

    return str1;
}

repeatStringNumTimes("abc", 3);