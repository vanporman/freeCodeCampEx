/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 */

function titleCase(str) {
    var myArray = [];
    myArray = str.split(" ");

    var myNewArray = [];
    for (var i in myArray){
        myArray[i].substring(0,1).toUpperCase();
        myNewArray.push(myArray[i].substring(0,1).toUpperCase() + myArray[i].substring(1, myArray[i].length).toLowerCase());
    }

    console.log(myArray);
    console.log(myNewArray);
    console.log(myNewArray.toString().replace(/[,]/gi, ' '));
    return myNewArray.toString().replace(/[,]/gi, ' ');
}

titleCase("I'm a little tea pot");