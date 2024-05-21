 //name array 
 let guestArray :string[] =["Maryam","Naina","Tooba"];
// can not make dinner 
let absentGuest :string = "Maryam";
// invite new guest
let newGuest :string ="Amna";
guestArray[guestArray.indexOf(absentGuest)]=newGuest;
// send msg
//guestArray.map((item)=> console.log(`Hello ${item}, you are invited to dinner`))
console.log ( "welcome! all we found a bigger dinner table");
guestArray.unshift("Sadia");
let middleGuest : string = "Fehmeen";
guestArray.splice(2 ,0 ,middleGuest)
guestArray.push ("Emaan");
console.log (guestArray);
guestArray.map((dinner)=> console.log(`Dear ${dinner} you are invited to dinner`));

