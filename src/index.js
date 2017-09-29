module.exports = function zeros(expression) {
  var exprParse = expression.split('*');
var multiArray =[];
var str, number;
var countTens = 0, countOdds =0, countFives= 0;
var result;
for (var i=0; i <exprParse.length; i++ ) {
    str = exprParse[i];
    if (str[str.length-1] ==='!' && (str[str.length-2] ==='!')) { //!! case
        number = parseInt(str.substring(0,str.length - 2));
        do {
            multiArray.push(number);
            number = number -2;
        } while (number >0);
    } else { // ! case
        number = parseInt(str.substring(0,str.length - 1));
        do {
            multiArray.push(number);
            number = number - 1;
        } while (number >0);
    }
}
for (var i = 0; i < multiArray.length; i++ ) {
    if (multiArray[i]%10 == 0) {
        countTens++;
    }
    if (multiArray[i]%2==0 && multiArray[i]%10 != 0) {
        countOdds++;
    }
    if (multiArray[i]%5==0 && multiArray[i]%10 != 0) {
        countFives++;
    }
}
result = countTens;
if (countOdds < countFives) {result = result + countOdds} else {result = result + countFives};
return result;
}
