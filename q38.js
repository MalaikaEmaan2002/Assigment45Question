// make function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling a function 
describe_city("karachi");
describe_city("Lahore");
describe_city("Istanbul", "Turkey");
export {};
