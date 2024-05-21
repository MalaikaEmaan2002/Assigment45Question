// crate function to print  each magician name from an array
function show_magician (magician : string[]){
    magician.forEach(name => console.log(name));
}
// create make greate function through modify with an array 
function make_greate (magician : string[]){
   return  magician.map (name => `The Great ${name}`);
}
// create an array containing magician name 
let magician_name : string[] = ["Sundas", "Sania", "Irha"];

// making a copy of original array throuht .slice() function
let copy_magician_name = magician_name.slice()

// modify the copied array to  include "The Greate" with their name
let copy_greate_magician = make_greate(copy_magician_name);

// print original array
show_magician(magician_name);

// print copy array
show_magician(copy_greate_magician);