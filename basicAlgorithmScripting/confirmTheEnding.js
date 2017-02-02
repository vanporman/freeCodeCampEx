/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 */

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var targetLength = target.length;
    var strLength = str.length;

    console.log(targetLength);
    console.log(strLength);

    var strMinusTarget = strLength - targetLength;

    console.log(strMinusTarget);
    console.log(str.substring(strMinusTarget, strLength));

    if(str.substring(strMinusTarget, strLength) === target){
        console.log(str.substring(strMinusTarget, strLength));
        return true;
    }
    else{
        return false;
    }
}

confirmEnding("He has to give me a new name", "name");