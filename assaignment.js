

// Declare a function and give into a number parameter. Multiplied with number parameter by 3. Then take a output.That's output will be divided by  2 and the final result subtraction from 5.Now return final result;

function mindGame(num) {

    if (typeof num === "number") {
        const multiple = num * 3;
        const sum = multiple + 10;
        const divide = sum / 2;
        const substraction = divide - 5;
        return substraction;
    }
    else {
        return "input should be a number"
    }
}

// A function named evenOdd is declared. which takes a string as a parameter. Returns Even if the length of the string is even and Odd if the length is odd.


function evenOdd(name) {
    if (typeof name === "string") {
        if (name.length % 2 == 0) {
            return "even";
        }
        else {
            return "odd"
        }
    }
    else {
        return "please input a string parameter"
    }

}


// A function is declared that will take a number as input.  Then the difference between the input value and 7 is calculated.  If the difference is less than 7 then return the value of that difference.  And if it is not, it will return double of that input


function isLGSeven(num1) {
    if (typeof num1 === "number") {
        let differnce = num1 - 7;
        if (differnce < 7) {
            return differnce;
        }
        else {
            return num1 * 2;
        }
    }
    else {
        return "Please enter a number"


    }

}

//A function is declared that will take a Array as input. Array will contain any numeric number.  It can have negative numbers and positive numbers too.  Then return the number of negative numbers in Array

function findingBadData(arry) {
    let badData = [];
    if (Array.isArray(arry)) {
        for (let i = 0; i < arry.length; i++) {
            let element = arry[i];
            if (element < 0) {
                badData.push(element);

            }

        }
        return badData.length;
    }
    else {
        return "Please Enter a Array"
    }

}



//A function is declared that will  3 numbers are taken as input.  Then the first input is multiplied by 21, the second input is multiplied by 32.  And the third input is multiplied with 43.  Then the three inputs are added and placed in a variable.  If the total number is a multiple of 1000 then subtract 2000 from the total number and return the remainder.  And if not, the total number must be returned.



function gemsToDiamond(gem1, gem2, gem3) {
    
        const friendsOneDiamond = gem1 * 21;
        const friendsTwoDiamond = gem2 * 32;
        const friendsThreeDiamond = gem3 * 43;

        const totalDiamond = friendsOneDiamond + friendsTwoDiamond + friendsThreeDiamond;
        if (totalDiamond > 1000 * 2) {
            let getDiamond = totalDiamond - 2000;
            return getDiamond;
        }
        else {
            return totalDiamond;
        }
 
}
