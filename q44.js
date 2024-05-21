// define function with a rest parameter
function make_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("make a sandwich with the following item");
    item.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("now enjoy sandwich");
}
// call the function 3 times with 3 different number of arguments
make_sandwich("bread", "chicken", "cheese", "egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "cheese", "sausage", "capscium", "chicken");
