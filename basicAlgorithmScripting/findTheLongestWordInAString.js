/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Return the length of the longest word in the provided sentence.
 */

function findLongestWord(str) {
    var myArray = [];
    myArray = str.split(" ");

    var maxNumbers = [];
    for (var i in myArray){
        console.log(myArray[i] + " = " + myArray[i].length);

        maxNumbers.push(myArray[i].length);

    }

    var biggest = Math.max.apply(null, maxNumbers);
    console.log(maxNumbers);
    console.log(biggest);
    return biggest;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");