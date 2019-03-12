//var myCar = new {} linijka ta sama jak druga tylko ze inny zapis

var myCar = {};

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

console.log(myCar.year);
console.log(myCar['year']);

myCar.year = 1970;
myCar['year'] = 1971;

console.log(myCar);

// number-1
// number-2
// number-3

var myObject = {
  'number-1': 1,
  'number-2': 2,
  'number-3': 3
};

console.log(myObject['number-2']);




function f(x){
    return 2 * x + 1 ;
}
console.log (f(3));
console.log (f(7)* 10);
console.log (f(9));

var newValue = f(7) * 7;
var newValue2 = f(7) * f(3);
console.log(f(newValue2));


function (a,b,x){
    return a,x,b;
}
console.log(g(2,1,3));

var c = 2;
var d = 1;
function h(x) {
    return c * x *d;
}
console.log(h(3));






