// define function with a rest parameter
function make_sandwich(...item : string[]){
    console.log ("make a sandwich with the following item");
    item.forEach(singleItem => console.log(singleItem));
    console.log ("now enjoy sandwich");
}
// call the function 3 times with 3 different number of arguments
make_sandwich("bread", "chicken", "cheese" ,"egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "cheese" , "sausage" , "capscium", "chicken"  );