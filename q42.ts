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

// call make greate function to modify magician
let magician_show = make_greate(magician_name);

// call function that show modified list of magicians
show_magician(magician_show);
