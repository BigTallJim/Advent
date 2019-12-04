function Opcode(){

}

Opcode.prototype.checkValues = function(inputArray){
  let currentPosition = 0;
  let currentCommand = inputArray[currentPosition];
  let outputArray = [...inputArray];
  while  (currentCommand != 99) {
    switch (currentCommand){
      case 1:
        outputArray[outputArray[currentPosition+3]] = outputArray[outputArray[currentPosition+1]] + outputArray[outputArray[currentPosition+2]];
        break;
      case 2:
        outputArray[outputArray[currentPosition+3]] = outputArray[outputArray[currentPosition+1]] * outputArray[outputArray[currentPosition+2]];
        break;
      default:
        console.log("Error" + currentCommand);
    }
    currentPosition += 4
    currentCommand = outputArray[currentPosition];
  }
  return outputArray
};

Opcode.prototype.httptest = function(){
  const http = require('https');
  const fs = require('fs');
  const file = fs.createWriteStream("file.txt");

  http.get("https://adventofcode.com/2019/day/2/input", function(response) {
    response.pipe(file);
    console.log(response);
  });
}

let input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,6,23,2,6,23,27,2,27,9,31,1,5,31,35,1,35,10,39,2,39,9,43,1,5,43,47,2,47,10,51,1,51,6,55,1,5,55,59,2,6,59,63,2,63,6,67,1,5,67,71,1,71,9,75,2,75,10,79,1,79,5,83,1,10,83,87,1,5,87,91,2,13,91,95,1,95,10,99,2,99,13,103,1,103,5,107,1,107,13,111,2,111,9,115,1,6,115,119,2,119,6,123,1,123,6,127,1,127,9,131,1,6,131,135,1,135,2,139,1,139,10,0,99,2,0,14,0]
let test1 = [1,0,0,0,99]
let test2 = [2,3,0,3,99]
let test3 = [2,4,4,5,99,0]
let test4 = [1,1,1,4,99,5,6,0,99]

let opcode = new Opcode();

for (var i = 0; i < 100; i++) {
  let tempArray = [...input];
  tempArray[1] = i;
  for (var j = 0; j < 100; j++) {
    tempArray[2] = j;
    if (opcode.checkValues(tempArray)[0] == 19690720) console.log(i+''+j);
  }
}