
function operation(type){
    resetError();
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result;
    // I am using the switch case function in JavaScript to reduce code verbosity.
    // I learned and used this in CS112, one of my jobs, and in high school.
    // the switch is a neater form of a bunch of nested if else statements which is why I want to use it : D
    switch(type){
        case "add":
            result = Number(first)+Number(second);
            break;
        case "subtract":
            result = Number(first)-Number(second);
            break;
        case "multiply":
            result = Number(first)*Number(second);
            break;
        case "divide":
            if (Number(second)===0) {
                document.getElementById("output").innerHTML = "You cannot divide by 0!";
            } else{
                result = Number(first)/Number(second);

            }
            break;
        case "pow":
            result = 1;
            for (let i = 0; i< Math.abs(Number(second));i++) {
                // take absolute value of exponent, then do reciprocal if the second num was negative
                result *= Number(first);
            }
            if (Number(second)<0){
                result = 1/result;
            }
            break;
    }
    displayResult(result);
}

function clearText(){
    document.getElementById("output").innerHTML = String("Result: ");
}

function displayResult(result){
    if(result<0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "#1f1145";
    }
    document.getElementById("output").innerHTML = "Result: " + String(result);
}

function resetError(){
    document.getElementById("output").innerHTML = "";
}