let userName = ["Malaika", "Emaan", "Admin", "Fehmeen", "Azha"];
// using forEach loop on arry
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again`);
    }
});
export {};
