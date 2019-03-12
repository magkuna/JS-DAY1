var numbers = []; // 1, 2, 3, 4, 5, 6

while (numbers.length < 10) {
  var myNumber = Math.round((Math.random() * 100) + 1);

  var found = false;
  for (var i = 0; i < numbers.length; i++) {
    if (myNumber == numbers[i]) {
      found = true;
    }
  }

  if (!found) {
    numbers.push(myNumber);
    console.log(myNumber);
  }
}

//version 2 
console.log("version 2");

numbers = [];
while (numbers.length < 10) {
  var myNumber = Math.round((Math.random() * 100) + 1);
  if (!numbers.includes(myNumber)) {
    numbers.push(myNumber);
    console.log(myNumber);
  }
}