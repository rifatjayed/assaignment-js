// problem 1

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





// problem 2

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



// problem 3

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






// problem 4


// Array will contain any numeric number.  It can have negative numbers and positive numbers too.  Then return the number of negative numbers in Array

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




// problem 5


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

const convertToDiamond = gemsToDiamond(1, 1, 1);
console.log(convertToDiamond)