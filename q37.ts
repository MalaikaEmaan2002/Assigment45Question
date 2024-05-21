// make function
function make_shirt (size : string = "Large", printedMessage : string = "I Love Typescript"){
    console.log (`create a ${size} shirt with ${printedMessage} print on shirt`)
}
// calling a function by-default
make_shirt();
// calling a function now with medium size
make_shirt("medium");
// calling a functoin now with small size and also print different message
make_shirt("small", "I Love Coding");
