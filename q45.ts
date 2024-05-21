function create_car (manufacture :string, model:string, ...optional: {[key : string] :any} []){
    let car :{
        manufacture : string,    model : string, optional: {[key : string] :any}
    }={
        manufacture: manufacture,
        model: model ,
        optional: {}
    }
    for(let option of optional){
        for (let key in option){
            car.optional[key]  = option[key]
        }
    }
    return car;
}
let car1 = create_car("Toyato","corola" ,{color : "blue"} , {"sunroof" : "True"} );
let car2 = create_car("Honda" , "CR-V" , {colour : "gray"});
console.log (car1 , "\n" , car2 );
