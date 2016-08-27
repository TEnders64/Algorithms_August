/*Parens Valid
Create a function that, given an input string str,
returns a boolean whether parentheses in str are valid.
Valid sets of parentheses always open before they close,
for example. For "Y(3(p)p(3)r)s", return true.
Given "N(0(p)3", return false: not every parenthesis is closed.
Given "N(0)t )0(k", return false.*/

    function parensValid(input){
        var parens = 0;
        for(var i = 0; i < input.length; i++){
            if(parens < 0){
                console.log('false');
                return false;
            }
            else if(input[i] === '('){
                parens++;
            }
            else if(input[i] === ')'){
                parens--;
            }
        }
        if(parens === 0){
            console.log(parens);
            console.log('true');
            return true;
        }
        else{
            console.log(parens);
            console.log('false');
            return false;
        }
    }

    var inputString = "Y(3(p)p(3)r)s";
    parensValid(inputString);
    inputString = "N(0(p)3";
    parensValid(inputString);
    inputString = "N(0(p)3";
    parensValid(inputString);
