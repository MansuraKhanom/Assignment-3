// https://github.com/MansuraKhanom/Assignment-3


// 1. Convert km to meter

function kilometerToMeter(km) {
    if (km >= 0 && typeof km == "number") {
        var meters = 1000 * km;
        return meters;
    }
    else {
        // Handling negative, string & other invalid values.
        return ("Error: Please give a valid number input!");
    }

}
var result = kilometerToMeter(4);
console.log(result);


// 2. Calculate budget

function budgetCalculator(w, p, l) {         /** w, p, l = number of watches, phones, laptops */
    if (typeof w == "number" && typeof p == "number" && typeof l == "number") {
        if (w >= 0 && p >= 0 && l >= 0 && Number.isInteger(w) && Number.isInteger(p) && Number.isInteger(l)) {
            var costWatch = w * 50;
            var costPhone = p * 100;
            var costLaptop = l * 500;
            var total = costWatch + costPhone + costLaptop;
            return total;

        }
        else {
            // Handling negative and float inputs.
            return ("Error: These items' quantity cannot be negative / fraction.");
        }
    }
    else {
        // Handling invalid data types.
        return ("Error: Please give a valid number input.");
    }
}

var totalCost = budgetCalculator(2, 1, 1.1);
console.log(totalCost);


// 3. Calculate hotel cost

function hotelCost(nights) {
    if (typeof nights == "number" && Number.isInteger(nights) && nights >= 0) {
        if (nights <= 10) {
            var total = 100 * nights;
            return total;
        }
        else if (nights <= 20) {
            var total = (nights - 10) * 80 + hotelCost(10);
            return total;
        }
        else {
            var total = (nights - 20) * 50 + hotelCost(20);
            return total;
        }
    }
    else {
        // Handling invalid data types, negative and float.
        return ("Error: Number of nights can only be a number and cannot be negative / fractional!");
    }
}

var totalCost = hotelCost(7);
console.log(totalCost);


// 4. Find out the longest string from an array

function megaFriend(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let longest = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (typeof arr[i] != "string") {
                    // Handling string validity of a name.
                    return "Error: Invalid name input!";
                }
                else if (arr[i].length > longest.length) {
                    longest = arr[i];
                }
            }
            return longest;
        }
        else {
            // Handling the array's emptiness.
            return "Error: The list is empty!"
        }
    }
    else {
        // Handling invalid input such as string, number, object.
        return "Error: Invalid input. Please give a valid input."
    }
}

let namesOfFrnds = ["Ross", "Monica", "Phoebe", "Chandler", "Rachel", "Joey", "Jennifer"];
var longestName = megaFriend(namesOfFrnds);
console.log(longestName);

