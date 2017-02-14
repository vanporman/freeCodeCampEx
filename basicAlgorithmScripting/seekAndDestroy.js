/**
 * Created by andreas on 06/02/2017.
 */

/*
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 */

function destroyer(arr) {
    // Remove all the values
    //See lisab kõik funktsiooni argumendid yhiseks mitmerealiseks arrayks!!!
    // var args = Array.prototype.slice.call(arguments);
    // console.log(args);
    //See võtab funktsiooni argumentidest ainult array-d
    var newArry = arr;
    console.log(newArry);
    //See võtab funktsiooni argumendid kohalt 1 ja lisab need uude arraysse!!!
    var filters = Array.prototype.slice.call(arguments, 1);
    console.log("Filters: " + filters);

    var filteredArray = newArry.filter(function(i){
        if(filters.indexOf(i) !== -1){
            console.log("Not pass: " + i);
            return false;
        }
        console.log("Pass: " + i);
        return true;
    });

    console.log(filteredArray);
    return filteredArray;
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer(["tree", "hamburger", 53], "tree", 53);
