var numbers= [];
var numbersLength = 6;

for (var i = 0; i< numbersLength; i++){
    var myNumber = Math.round((Math.random() * 100) + 1);
    numbers.push(myNumber);
}
console.log(numbers);

/*
var newArray = numbers.slice(1,5);
var newArray = numbers.slice(2,6);
var newArray = numbers.slice(3,7);*/


var startIndex = numbersLength/ 2-2;
var endIndex = numbersLength / 2 + 2;

var newArray = numbers.slice(startIndex, endIndex);
console.log(newArray);