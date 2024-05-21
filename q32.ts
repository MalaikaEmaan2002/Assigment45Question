let currentUser : string[] = ["Tooba", "manahil", "Ayesha", "Sania", "Zara"];
let new_User : string[] = ["Iqra", "Manahil", "Sundas", "Maryam", "Sania"];
new_User.forEach(new_one_user => {
    let our_condition = currentUser.some(current_one_user => current_one_user.toLocaleLowerCase()=== new_one_user.toLocaleLowerCase())
    if (our_condition){
        console.log ( `Sorry! ${new_one_user} is already taken`);
    }else {
        console.log (`This username ${new_one_user} is available`);
    }
})
