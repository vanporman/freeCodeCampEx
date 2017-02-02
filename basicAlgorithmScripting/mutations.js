/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 */

function mutation(arr) {
    var myTarget = arr[0].toLowerCase();
    var testSubject = arr[1].toLowerCase();
    console.log(myTarget);
    console.log(testSubject);

    //See ketrab läbi stringi mille vastu me stringide elemente kontrollime
    for (var i = 0; i < myTarget.length; i++){
        //See kontrollib kas kontrollitavas stringis on samu elemente mis kontrolli
        //omas. Kui ei ole, määratakse väärtuseks -1, muidu näidatakse elemendi asukoha
        //indeksit kontrolli stringis
        if(myTarget.indexOf(testSubject[i]) < 0){
            console.log(testSubject.indexOf(myTarget[i]) + " - " + myTarget[i]);
        }
        //Juhul kui kõik elemendid on olemas, näidatakse kontrollitava stringi elemente
        //kontrolli stringi indeksitega
        else{
            console.log(testSubject.indexOf(myTarget[i]) + " - " + myTarget[i]);
        }
    }

}

mutation(["hello", "hey"]); //<--false
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //<--true
mutation(["Mary", "Army"]); //<--true
mutation(["hello", "neo"]); //<--false

