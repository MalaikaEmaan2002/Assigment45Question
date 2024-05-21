//name array 
let guestArray = ["Maryam", "Naina", "Tooba"];
// can not make dinner 
let absentGuest = "Maryam";
// invite new guest
let newGuest = "Amna";
guestArray[guestArray.indexOf(absentGuest)] = newGuest;
// send msg
//guestArray.map((item)=> console.log(`Hello ${item}, you are invited to dinner`))
console.log("welcome! all we found a bigger dinner table");
guestArray.unshift("Sadia");
let middleGuest = "Fehmeen";
guestArray.splice(2, 0, middleGuest);
guestArray.push("Emaan");
console.log(guestArray);
guestArray.map((dinner) => console.log(`Dear ${dinner} you are invited to dinner`));
export {};
