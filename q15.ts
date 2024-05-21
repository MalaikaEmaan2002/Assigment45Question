 //name array 
 let guestArray :string[] =["Maryam","Naina","Tooba"];
// can not make dinner 
let absentGuest :string = "Maryam";
console.log(`${absentGuest} can not make it, for dinner`);
// invite new guest
let newGuest :string ="Amna";
guestArray[guestArray.indexOf(absentGuest)]=newGuest;
// send msg
guestArray.map((item)=> console.log(`Hello ${item}, you are invited to dinner`));