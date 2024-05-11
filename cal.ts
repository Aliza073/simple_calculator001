#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {message:"Enter first number", type:"number", name:"firstNumber"},
    {message:"Second first number", type:"number", name:"secondNumber"},
    {
        message:"Select one operator to perform operation",
        type:"list",
        name:"operator",
        choices:["Addition","Muntiplication","Divison","Substraction"],
    }
])
if(answer.operator === "Addition") {
    console.log(answer.firstNumber+answer.secondNumber)
} 
else if(answer.operator === "Muntiplication") {
    console.log(answer.firstNumber*answer.secondNumber)
}
else if(answer.operator === "Divison") {
    console.log(answer.firstNumber/answer.secondNumber)
}
else if(answer.operator === "Substraction") {
    console.log(answer.firstNumber-answer.secondNumber)
} else {
    console.log("invalid input")
}