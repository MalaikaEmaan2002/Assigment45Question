//name array 
let guestArray = ["Maryam", "Naina", "Tooba"];
// can not make dinner 
let absentGuest = "Maryam";
// invite new guest
let newGuest = "Amna";
guestArray[guestArray.indexOf(absentGuest)] = newGuest;
// send msg
//guestArray.map((item)=> console.log(`Hello ${item}, you are invited to dinner`))
guestArray.unshift("Sadia");
console.log(guestArray);
let middleGuest = "Fehmeen";
guestArray.splice(2, 0, middleGuest);
guestArray.push("Emaan");
console.log(guestArray);
console.log("we can invite only two people for dinner");
while (guestArray.length > 2) {
    let removeGuest = guestArray.pop();
    console.log(`sorry ${removeGuest} we can't invite you to dinner!`);
}
guestArray.map((item) => console.log(`${item} you are still invite to dinner`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
export {};
