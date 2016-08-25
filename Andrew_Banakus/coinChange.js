/*Coin Change with Object
Given a number of U.S. cents,
return the optimal configuration of coins, in an object*/

    function coinChange(cents){
        var quarters = 0;
        var dimes = 0;
        var nickels = 0;
        var pennies = 0;

        //Counts quarters first and subtracts from cents
        for(var i = 1; i < 4; i++){
            if(cents >= 25){
                quarters++;
                cents -= 25;
                //console.log(cents);
            }
           else if(cents < 25)
                break;
            }

        //Counts dimes second and subtracts from cents
        for(i = 1; i < 10; i++){
            if(cents >= 10){
                dimes++;
                cents -= 10;
                //console.log(cents);
            }
            else if(cents < 10)
                break;
            }

        //Counts nickles third and subtracts from cents
        for(i = 1; i < 20; i++){
            if(cents > 5){
                nickels++;
                cents -= 5;
                //console.log(cents);

            }
            else if(cents < 5)
                break;
            }

        //counts pennies fourth and subtracts from cents
        for(i = 1; i < 10; i++){
            if(cents >= 1){
                pennies++;
                cents -= 1;
                //console.log(cents);
            }
            else if(cents < 1)
                break;
            }
            var change = [
                quarters + " quarters",
                dimes + " dimes",
                nickels + " nickles,",
                pennies + " pennies."

            ];
            console.log(change);
        }


        var cents = 67;
        coinChange(cents);
