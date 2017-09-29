module.exports = function zeros(expression) {

    var exprParse = expression.split('*');
    var multiArray =[];
    var str, number;
    var countTwo =0, countFive= 0;
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

        if (multiArray[i]%5 == 0) {
            number = multiArray[i];
            do {
                countFive++;
                number = number/5;
            } while (number%5 == 0);
        }
        if (multiArray[i]%2 == 0) {
            number = multiArray[i];
            do {
                countTwo++;
                number = number/2;
            } while (number%2 == 0);
        }
    }
    return countTwo < countFive ? countTwo : countFive;
}
