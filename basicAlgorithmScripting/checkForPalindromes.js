/**
 * Created by andreas on 02/02/2017.
 */

/*
 * Return true if the given string is a palindrome. Otherwise, return false.
 */

function palindrome(str) {
    // Good luck!
    var strSmallLetter = str.toLowerCase();
    var withoutSpecialChar = strSmallLetter.replace(/[^0-9a-z]/gi, "");

    var backwardWord = '';
    function wordsBackwards(backwards) {
        for (i = backwards.length; i >= 0; i--){
            backwardWord += backwards.charAt(i);
        }
        return backwardWord;
    }
    wordsBackwards(withoutSpecialChar);

    console.log(backwardWord);
    // console.log(withoutSpecialChar);
    if(withoutSpecialChar === backwardWord){
        return true;
    }
    else{
        return false;
    }
}
palindrome("_eYe");
