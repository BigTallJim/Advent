function Password(){

}

Password.prototype.checkValues = function(inputStart, inputEnd){
    var validPassword = [];
    for (var i = inputStart; i <= inputEnd; i++) {
        var valid = false;
        valid = this.checkDouble2(i);
        if (valid) {valid = this.checkIncrease(i)};
        if (valid){
            validPassword.push(i);
        }
    }
    return validPassword;
}

Password.prototype.checkDouble = function(inputValue){
    var splitInput = inputValue.toString().split("");
    for (var i = 0; i <= splitInput.length-1; i++) {
        if (splitInput[i] == splitInput[i+1]){
            return true;
        }
    }
}

Password.prototype.checkDouble2 = function(inputValue){
    var splitInput = inputValue.toString().split("");
    returnValue = false;
    var charCount = 0;
    for (var i = 0; i <= splitInput.length-1; i++) {
        if (splitInput[i] == splitInput[i+1]){
            charCount += 1;
        }else{
            if (charCount == 1){
                returnValue = true;
            }
            charCount = 0;
        }
    }
    return returnValue;
}

Password.prototype.checkIncrease = function(inputValue){
    var splitInput = inputValue.toString().split("");
    var tempValid = true;
    for (var i = 0; i <= splitInput.length-1; i++) {
        if (splitInput[i] > splitInput[i+1]){
            tempValid = false;
        }
    }
    return tempValid;
}

let password = new Password();
console.log(password.checkValues(248345, 746315)); 
// console.log(password.checkValues(111123, 111123)); 