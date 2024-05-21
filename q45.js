function create_car(manufacture, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model,
        optional: {}
    };
    for (var _a = 0, optional_1 = optional; _a < optional_1.length; _a++) {
        var option = optional_1[_a];
        for (var key in option) {
            car.optional[key] = option[key];
        }
    }
    return car;
}
var car1 = create_car("Toyato", "corola", { color: "blue" }, { "sunroof": "True" });
var car2 = create_car("Honda", "CR-V", { colour: "gray" });
console.log(car1, "\n", car2);
