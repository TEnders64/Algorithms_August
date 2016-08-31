// Here are your challenges:
// Book Index
// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of baroque fugues. He knows that some of those fugueing challenges will be less popular than others, so he needs a book index. Given a sorted array of pages, produce a book index string. Consecutive pages should form ranges separated by a dash. For [1,3,4,5,7,8,10], return the string "1, 3-5, 7-8, 10".

function indexString(arr){
    var temp = [];

    for (var i = 0; i < arr.length; i++) {

        var len = arr.length;
        var current = arr[i];
        var previous = arr[(i+len-1)%len];
        var next = arr[(i+1)%len];

        if (previous !== current - 1) {
            temp.push(current);
        }else if(previous + 1 === current && current + 1 !== next){
            temp.push("-"+ current);
        }
    }

    var arr = []

    for (var i = 0; i < temp.length; i++) {
        var next = temp[(i+1)%len];
        var current = temp[i];
        var previous = temp[(i+len-1)%len];


        if(typeof current === 'number' && typeof next != 'string'){
            arr.push(current);

        }else if(typeof current === 'string'){
            console.log("hit")
            arr[i] = (previous.toString() + current)
        }

    }

    arr = arr.filter(function(n){ return n != undefined });
    final = arr.join(",");

console.log(final);

}

indexString([1, 3, 4, 5, 7, 8, 10]);

// Common Suffix
// Lance is writing his opus: a tome of beat poetry. Always looking for a good rhyme, he seeks words ending with the same letters. Write a function that, given a word array, returns the largest common suffix (word-end). For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not a very creative starting point). If it is ["nice", "ice", "baby"], return "".

// function comSuf(arr){
//
// console.log(arr.charAt(-1));
//
//
// }
//
// comSuf("deforestation")
