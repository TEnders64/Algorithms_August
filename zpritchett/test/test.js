var assert = require('assert');
var cd = require('../cd_algo');
var _ = require('underscore');

// pushFront test
describe('pushFront', function() {
    var origArray     = [1,2,3,4,5,6]; // original
    var pfArray       = [1,2,3,4,5,6]; // pushFront version
    var usArray       = [1,2,3,4,5,6]; // unshift version
    var testValues    = [0,8,-1,'help',undefined];

    it('Should create an array with length == origArray.length + 1', function() {
        cd.pushFront(pfArray, 10);
        assert(pfArray.length === origArray.length + 1);
        pfArray = origArray;
    });

    testValues.forEach(function(val) {
        it('pushFront(arr, ' + val + ') should do the same thing as arr.shift(' + val + ')', function() {
            cd.pushFront(pfArray, val);
            usArray.unshift(val);
            assert(_.isEqual(pfArray, usArray));

            // reset arrays.
            pfArray = origArray;
            usArray = origArray;
        });
    });
});

// popFront test
describe('popFront', function() {
    var origArray     = [1,2,3,4,5,6]; // original
    var pfArray       = [1,2,3,4,5,6]; // pushFront version
    var usArray       = [1,2,3,4,5,6]; // unshift version

    it('Should create an array with length == origArray.length - 1', function() {
        cd.popFront(pfArray);
        assert(pfArray.length === origArray.length - 1);
        pfArray = origArray;
    });

    it('popFront(arr) should do the same thing as arr.shift()', function() {
        assert(_.isEqual(cd.popFront(pfArray), usArray.shift()));

        // reset arrays.
        pfArray = origArray;
        usArray = origArray;
    });
});

// insertAt test
describe('insertAt', function() {
    var origArray     = [1,2,3,4,5,6]; // original
    var iaArray       = [1,2,3,4,5,6]; // insertAt version
    var spliceArray   = [1,2,3,4,5,6]; // splice version
    var testValues    = [0,8,-1,'help',undefined];

    it('Should create an array with length == origArray.length + 1', function() {
        cd.insertAt(iaArray, 3, 64);
        assert(iaArray.length === origArray.length + 1);
        iaArray = origArray;
    });

    testValues.forEach(function(val) {
        it('insertAt(arr, index, ' + val + ') should do the same thing as arr.splice(index, 0, ' +  val + ')', function() {
            spliceArray.splice(3, 0, val);
            cd.insertAt(iaArray, 3, val);
            assert(_.isEqual(iaArray, spliceArray));

            // reset arrays.
            iaArray = origArray;
            spliceArray = origArray;
        });
    })
});

// insertAt test
describe('removeAt', function() {
    var origArray     = [1,2,3,4,5,6]; // original
    var raArray       = [1,2,3,4,5,6]; // removeAt version

    it('Should create an array with length == origArray.length - 1', function() {
        cd.removeAt(raArray, 3);
        assert(raArray.length === origArray.length - 1);
        raArray = origArray;
    });

    it('removeAt([1,2,3,4,5,6], 2) should create [1,2,4,5,6] and return 3', function() {
        var val = cd.removeAt(raArray, 2);
        assert(_.isEqual(raArray, [1,2,4,5,6])) && assert(val === 3);
    });
});

// swapArrayPairs test
describe('swapArrayPairs', function() {
    it('swapArrayPairs([1,2,3,4,5,6]) should create [2,1,4,3,6,5]', function() {
        var arr = [1,2,3,4,5,6];
        cd.swapArrayPairs(arr);
        assert(_.isEqual(arr, [2,1,4,3,6,5]));
    });

    it('swapArrayPairs([cat,dog,fish]) should create [dog,cat,fish]', function() {
        var arr = ['cat','dog','fish'];
        cd.swapArrayPairs(arr);
        assert(_.isEqual(arr, ['dog','cat','fish']));
    });
});

// removeDuplicates test
describe('removeDuplicates', function() {
    it('removeDuplicates([1,1,1,2,3,3,5,6,6]) should create [1,2,3,4,5,6]', function() {
        var arr = [1,1,1,2,3,3,5,6,6];
        cd.removeDuplicates(arr);
        assert(_.isEqual(arr, [1,2,3,5,6]));
    });
});

// reverseArray test
describe('reverseArray', function() {
    it('reverseArray([1,1,1,2,3,3,5,6,6]) should create [6,6,5,3,3,2,1,1,1]', function() {
        var arr = [1,1,1,2,3,3,5,6,6,4];
        cd.reverseArray(arr);
        assert(_.isEqual(arr, [4,6,6,5,3,3,2,1,1,1]));
    });
});

// removeNegatives test
describe('removeNegatives', function() {
    it('removeNegatives([1,1,-1,2,3,3,5,-6,6]) should create [1,1,2,3,3,5,6]', function() {
        var arr = [1,1,-1,2,3,3,5,-6,6];
        cd.removeNegatives(arr);
        assert(_.isEqual(arr, [1,1,2,3,3,5,6]));
    });
});

// rotateArray test
describe('rotateArray', function() {
    it('rotateArray([1,2,3,4,5], 3) should create [3,4,5,1,2]', function() {
        var arr = [1,2,3,4,5];
        cd.rotateArray(arr, 3);
        assert(_.isEqual(arr, [3,4,5,1,2]));
    });

    it('rotateArray([1,2,3,4,5], -3) should create [4,5,1,2,3]', function() {
        var arr = [1,2,3,4,5];
        cd.rotateArray(arr, -3);
        assert(_.isEqual(arr, [4,5,1,2,3]));
    });
});

// filterArray test
describe('filterArray', function() {
    it('rotateArray([1,2,3,4,5], 2, 6) should create [1,2]', function() {
        var arr = [1,2,3,4,5];
        cd.filterArray(arr, 2, 6);
        assert(_.isEqual(arr, [1,2]));
    });

    it('rotateArray([1,2,3,4,5,7], 2, 6) should create [1,3,7]', function() {
        var arr = [1,2,3,4,5,7];
        cd.filterArray(arr, 2, 6);
        assert(_.isEqual(arr, [1,2,7]));
    });

    it('rotateArray([1,2,3,4,5,7], 0, 8) should create []', function() {
        var arr = [1,2,3,4,5,7];
        cd.filterArray(arr, 0, 8);
        assert(_.isEqual(arr, []));
    });
});

// nthToLast test
describe('nthToLast', function() {
    it('nthToLast([1,2,3,4,5], 2) should return 4', function() {
        var arr = [1,2,3,4,5];
        assert(_.isEqual(cd.nthToLast(arr, 2), 4));
    });

    it('nthToLast([1,2,3,4,5], 7) should return null', function() {
        var arr = [1,2,3,4,5,7];
        assert(_.isEqual(cd.nthToLast(arr, 7), null));
    });
});

// nthToLast test
describe('shuffleArray', function() {
    it('shuffleArray(arr) should randomize array', function() {
        var arr = [1,2,3,4,5];
        cd.shuffleArray(arr);
    });
});

// spliceArray test
describe('spliceArray', function() {
    it('spliceArray([1,2,3,4,5], 2, 3) should return [1,2,5]', function() {
        var arr = [1,2,3,4,5];
        cd.spliceArray(arr, 2, 3);
        assert(_.isEqual(arr, [1,2,5]));
    });
});

// intermediateSums test
describe('intermediateSums', function() {
    it('intermediateSums([1,2,3,4,5]) should return [1,2,3,4,5,15]', function() {
        var arr = [1,2,3,4,5];
        cd.intermediateSums(arr);
        assert(_.isEqual(arr, [1,2,3,4,5,15]));
    });

    it('intermediateSums([1,1,1,1,1,1,1,1,1,1,3,2,2,2,2]) should return [1,1,1,1,1,1,1,1,1,1,10,3,2,2,2,2,11]', function() {
        var arr = [1,1,1,1,1,1,1,1,1,1,3,2,2,2,2];
        cd.intermediateSums(arr);
        assert(_.isEqual(arr, [1,1,1,1,1,1,1,1,1,1,10,3,2,2,2,2,11]));
    });

    it('intermediateSums([1,1,1,1,1,1,1,1,1,1,3,2,2,2,2,3,3,3,3,3,4,4,4,4]) should return [1,1,1,1,1,1,1,1,1,1,10,3,2,2,2,2,3,3,3,3,3,26,4,4,4,4,16]', function() {
        var arr = [1,1,1,1,1,1,1,1,1,1,3,2,2,2,2,3,3,3,3,3,4,4,4,4];
        cd.intermediateSums(arr);
        assert(_.isEqual(arr, [1,1,1,1,1,1,1,1,1,1,10,3,2,2,2,2,3,3,3,3,3,26,4,4,4,4,16]));
    });
});

// duplicateArray test
describe('duplicateArray', function() {
    it('duplicateArray([1,2,3,4,5]) should return [1,1,2,2,3,3,4,4,5,5]', function() {
        var arr = [1,2,3,4,5];
        cd.duplicateArray(arr);
        assert(_.isEqual(arr, [1,1,2,2,3,3,4,4,5,5]));
    });

    it('duplicateArray([cat, 5, dog, undefined]) should return [cat, cat, 5, 5, dog, dog, undefined, undefined]', function() {
        var arr = ['cat', 5, 'dog', undefined];
        cd.duplicateArray(arr);
        assert(_.isEqual(arr, ['cat', 'cat', 5, 5, 'dog', 'dog', undefined, undefined]));
    });
});

// zipArray test
describe('zipArray', function() {
    it('zipArray([1,2,3,4,5], [6,7,8]) should return [1,6,2,7,3,8,5]', function() {
        var arr = [1,2,3,4,5];
        cd.zipArray(arr, [6,7,8]);
        assert(_.isEqual(arr, [1,6,2,7,3,8,4,5]));
    });

    it('zipArray([1,2,3], [4,5,6,7,8]) should return [1,4,5,3,6,7,8]', function() {
        var arr = [1,2,3];
        cd.zipArray(arr, [4,5,6,7,8]);
        assert(_.isEqual(arr, [1,4,2,5,3,6,7,8]));
    });
});

// removeBlanks test
describe('removeBlanks', function() {
    it('removeBlanks("Hey there, !") should return Heythere,!', function() {
        var string = "Hey there, !";
        assert(_.isEqual(cd.removeBlanks(string), 'Heythere,!'));
    });
});

// getDigits test
describe('getDigits', function() {
    it('getDigits("45eder96sdf69") should return 459669', function() {
        var string = "45eder96sdf69";
        assert(_.isEqual(cd.getDigits(string), 459669));
    });
});

// parensValid test
describe('parensValid', function() {
    it('parensValid("(sasd)()))") should return false', function() {
        var string = "(sasd)()))";
        assert(!cd.parensValid(string));
    });


    it('parensValid("(sasd)()hey(())") should return true', function() {
        var string = "(sasd)()hey(())";
        assert(cd.parensValid(string));
    });
});

// isPalindrome test
describe('isPalindrome', function() {
    it('isPalindrome("Borrow or rob?") should return true', function() {
        var string = "Borrow or rob?";
        assert(cd.isPalindrome(string));
    });

    it('isPalindrome("Taco cat") should return true', function() {
        var string = "Taco cat";
        assert(cd.isPalindrome(string));
    });

    it('isPalindrome("Taco rat") should return false', function() {
        var string = "Taco rat";
        assert(!cd.isPalindrome(string));
    });
});

// isAlphabetical test
describe('isAlphabetical', function() {
    it('isAlphabetical("abcdefg") should return true', function() {
        var string = "abcdefg";
        assert(cd.isAlphabetical(string));
    });

    it('isAlphabetical("abcdeqfg") should return false', function() {
        var string = "abcdeqfg";
        assert(!cd.isAlphabetical(string));
    });
});

// determineCoins test
describe('determineCoins', function() {
    it('determineCoins(45) should return {1, 2, 0, 0}', function() {
        assert(_.isEqual(cd.determineCoins(45), {quarters: 1, dimes: 2, nickels: 0, pennies: 0}));
    });

    it('determineCoins(625) should return {25, 0, 0, 0}', function() {
        assert(_.isEqual(cd.determineCoins(625), {quarters: 25, dimes: 0, nickels: 0, pennies: 0}));
    });

    it('determineCoins(13) should return {0, 1, 0, 3}', function() {
        assert(_.isEqual(cd.determineCoins(13), {quarters: 0, dimes: 1, nickels: 0, pennies: 3}));
    });
});

// mmaObject test
describe('mmaObject', function() {
    it('mmaObject([3,4,5,6,-1]) should return {-1, 6, 3.4}', function() {
        assert(_.isEqual(cd.mmaObject([3,4,5,6,-1]), {min: -1, max: 6, avg: 3.4}));
    });

    it('mmaObject([400]) should return {400, 400, 400}', function() {
        assert(_.isEqual(cd.mmaObject([400]), {min: 400, max: 400, avg: 400}));
    });
});

// arrToMap test
describe('arrToMap', function() {
    it('arrToMap([name, age, gender], [zach, 29, male]) should return {name: zach, age: 29, gender: male}', function() {
        assert(_.isEqual(cd.arrToMap(['name', 'age', 'gender'], ['zach', 29, 'male']), {name: 'zach', age: 29, gender: 'male'}));
    });

    it('arrToMap([name, age], [zach, 29, male]) should return -1', function() {
        assert(_.isEqual(cd.arrToMap(['name', 'age'], ['zach', 29, 'male']), -1));
    });
});

// invertHash test
describe('invertHash', function() {
    it('invertHash({name: zach, age: 29, awesome: yes}) should return {zach: name, 29: age, yes: awesome}', function() {
        var hash = {'name': 'zach', 'age': '29', 'awesome': 'yes'};
        cd.invertHash(hash);
        assert(_.isEqual(hash, {'zach': 'name', '29': 'age', 'yes': 'awesome'}));
    });
});

// concatString test
describe('concatString', function() {
    it('concatString(hey, how, is, it, going?) should return heyhowisitgoing?', function() {
        assert(_.isEqual(cd.concatString('hey', 'how', 'is', 'it', 'going?'), 'hey'.concat('how', 'is', 'it', 'going?')));
    });
});

// sliceString test
describe('concatString', function() {
    it('sliceString("hello", 1, 4) should return "ell"', function() {
        assert(_.isEqual(cd.sliceString("hello", 1, 4), 'hello'.slice(1, 4)));
    });

    it('sliceString("hello", -1) should return "l"', function() {
        assert(_.isEqual(cd.sliceString("hello", -2), 'hello'.slice(-2)));
    });
});

// trimString test
describe('trimString', function() {
    it('trimString(" hello ") should return "hello"', function() {
        var str = " hello ";
        assert(_.isEqual(cd.trimString(str), str.trim()));
    });

    it('trimString(" he llo there   ") should return "he llo there"', function() {
        var str = "     he llo there   ";
        assert(_.isEqual(cd.trimString(str), str.trim()));
    });
});

// splitString test
describe('splitString', function() {
    it('splitString("cat,dog,mouse", \',\') should return [cat, dog, mouse]', function() {
        var str = "cat,dog,mouse";
        assert(_.isEqual(cd.splitString(str, ','), str.split(',')));
    });


    it('splitString("cat,dog,mouse", \',\', 2) should return [cat, dog]', function() {
        var str = "cat,dog,mouse";
        assert(_.isEqual(cd.splitString(str, ',', 2), str.split(',', 2)));
    });
});

// searchString test
describe('searchString', function() {
    it('searchString("hello", "el") should return 1', function() {
        assert(_.isEqual(cd.searchString("hello", "el"), 1));
    });

    it('searchString("Oh Captain, my Captain!", "Captain") should return 3', function() {
        assert(_.isEqual(cd.searchString("Oh Captain, my Captain!", "Captain"), 3));
    });

    it('searchString("yo", "ho") should return 0', function() {
        assert(_.isEqual(cd.searchString("yo", "ho"), -1));
    });
});
