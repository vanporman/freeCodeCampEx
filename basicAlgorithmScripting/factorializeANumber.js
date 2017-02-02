/**
 * Created by andreas on 02/02/2017.
 */
/*
 * Return the factorial of the provided integer.
 */

function factorialize(num) {
    var count = 1;
    var i;
    for (i = 1; i < num+1; i++){
        count *= i;
    }
    console.log(count);
    return count;
}

factorialize(5);
