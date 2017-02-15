/**
 * Created by vanporman on 15.02.2017.
 */

/*
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 */

function rot13(str) { // LBH QVQ VG!
    var chipers = {
        A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",
        N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
    };

    var theCode = '';
    for (var i in str){
        console.log(str[i]);
        if (str[i] === "A"){
            theCode += chipers.A;
        }
        else if (str[i] === "B"){
            theCode += chipers.B;
        }
        else if (str[i] === "C"){
            theCode += chipers.C;
        }
        else if (str[i] === "D"){
            theCode += chipers.D;
        }
        else if (str[i] === "E"){
            theCode += chipers.E;
        }
        else if (str[i] === "F"){
            theCode += chipers.F;
        }
        else if (str[i] === "G"){
            theCode += chipers.G;
        }
        else if (str[i] === "H"){
            theCode += chipers.H;
        }
        else if (str[i] === "I"){
            theCode += chipers.I;
        }
        else if (str[i] === "J"){
            theCode += chipers.J;
        }
        else if (str[i] === "K"){
            theCode += chipers.K;
        }
        else if (str[i] === "L"){
            theCode += chipers.L;
        }
        else if (str[i] === "M"){
            theCode += chipers.M;
        }
        else if (str[i] === "N"){
            theCode += chipers.N;
        }
        else if (str[i] === "O"){
            theCode += chipers.O;
        }
        else if (str[i] === "P"){
            theCode += chipers.P;
        }
        else if (str[i] === "Q"){
            theCode += chipers.Q;
        }
        else if (str[i] === "R"){
            theCode += chipers.R;
        }
        else if (str[i] === "S"){
            theCode += chipers.S;
        }
        else if (str[i] === "T"){
            theCode += chipers.T;
        }
        else if (str[i] === "U"){
            theCode += chipers.U;
        }
        else if (str[i] === "V"){
            theCode += chipers.V;
        }
        else if (str[i] === "W"){
            theCode += chipers.W;
        }
        else if (str[i] === "X"){
            theCode += chipers.X;
        }
        else if (str[i] === "Y"){
            theCode += chipers.Y;
        }
        else if (str[i] === "Z"){
            theCode += chipers.Z;
        }
        else{
            theCode += str[i];
        }
    }
    console.log(theCode);

     return theCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");