// crate function to print  each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// create make greate function through modify with an array 
function make_greate(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// create an array containing magician name 
var magician_name = ["Sundas", "Sania", "Irha"];
// making a copy of original array throuht .slice() function
var copy_magician_name = magician_name.slice();
// modify the copied array to  include "The Greate" with their name
var copy_greate_magician = make_greate(copy_magician_name);
// print original array
show_magician(magician_name);
// print copy array
show_magician(copy_greate_magician);
