
let mango = "mango";
let upperCase = "MANGO";
let six = 6;
let eight = 8;
let vegetable = ["Onion" , "Potato" , "Radish"];

//test for equality & unequality with string
console.log ("Is mango is equal to mango?");
console.log (mango == "mango");
console.log ("Is mango is  not equal to mango?");
console.log (mango != "mango");

// test using the lower case function
console.log ("Is MANGO is equal to mango after converting to lower case?");
console.log (upperCase.toLocaleLowerCase()== "mango");
console.log ("Is MANGO is  not equal to mango after converting to lower case?");
console.log (upperCase.toLocaleLowerCase() != "mango");

// numerical test

// equal to and not equal to
console.log ("Is eight is equal to 6?");
console.log (eight == 6);
console.log ("Is six is not equal to 8?");
console.log (six != 8);

// greater than & less than
console.log ("Is eight is greater than 6?");
console.log (eight > 6);
console.log ("Is 8 is less than six?");
console.log (8 < six);

// greater than & equal to
console.log("Is eight is greater than and equal to 5?")
console.log ( eight >= 5)
console.log ("Is six is less than and equal to 3?");
console.log (six <= 3);

// testing & and or operator
// using && (and)
console.log ("eight is not equal to 6 & eight is greater than 6");
console.log (eight != 6 && eight > 6);
console.log ("eight is not equal to 6 & eight is greater than 20");
console.log (eight != 6 && eight > 20);

// using || (or)
console.log ("8 is greater than 10 or 6 is equal to 6");
console.log (8 > 10 || 6 ==6);
console.log ("8 is greater than 10 or 6 is not equal to 6");
console.log (8 > 10 || 6 !=6);

// an item include in array
console.log ("Is Radish is include in array?");
console.log (vegetable.includes("Radish"));
console.log ("Is Radish is not include in array?");
console.log (!vegetable.includes("Radish"));



