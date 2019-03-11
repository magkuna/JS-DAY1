/*var JestCieplo = false;
var swieciSlonce = true;

var idziemyNaPiwo;

if (jestCieplo) {
    if (swieciSlonce) {
        idziemyNaPiwo = true;
    }else {
        idziemyNaPiwo = false; 
    }
} else {
    idziemyNaPiwo = false;
}



console.log(idziemyNaPiwo);
//powinno byc false*/

var x = 5;
switch(x) {
    case 1:
    console.log(1);
    break;
    case '1':
    console.log(2);
    break;
    case x:
    console.log(2);
    break;
    default:
    console.log(0);
    break;
}
