/*var x = 5;

var result = (x===1)
? 1
: (x ==='1')
? 2
: (x ===2)
? x
: 0;
console.log(result);
*/

/*var numbers = [1,2, 3, 4, 5];
for (var i = 0; i <= 4; i++){
    console.log(numbers[i]);
}


var numbers = [1,2, 3, 4, 5];
for (var i = 0; i <= numbers.legth; i++){
    console.log(numbers[i]);
}

    console.log(numbers[4]);
    console.log(numbers [numbers.length-1]);*/

    var numbers = [];
    for (var i = 0; i <10000; i++){
        numbers.push(1);
    }
    console.log ('Moje i = ', i);
    
    console.time('in loop');
    for (var i = 0; i <= numbers.length; i++) {
      console.log(numbers[i]);
    }
    console.timeEnd('in loop')
    
    console.time('in loop');
    var length = numbers.length;
    for (var i = 0; i <= length; i++) {
      console.log(numbers[i]);
    }
    console.timeEnd('in loop')
    
    
    
    
    