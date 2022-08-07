// .apply is very similar to .call and differs in the way we pass arguments.
// .call expects a positional argument list(arg1, arg2, arg3) whereas .apply expects an array of arguments [arg1, arg2, arg3...].

const numbers = [12, 30, 66, 7, 8, 110];

let min = Math.min(12, 30, 2); // works only when numbers are provided as positional arguments

let max = Math.max.apply(null, numbers); // null here signifies that no explicit value was provided for binding
