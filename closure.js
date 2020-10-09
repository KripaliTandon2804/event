function init() {
    var firstName = "kripali";

    console.log("I am init")

    function sayFirstName(){
        console.log(firstName);
    }

    return sayFirstName;
}

var value = init();

value()

//Example 2

function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5 = doAddition(4)
console.log (add5(5))

//or

console.log(doAddition(5)(5))
