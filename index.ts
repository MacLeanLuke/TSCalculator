import {Calculator} from './src/calculator';
import {InputParser} from './src/inputParser';
import {question } from 'readline-sync';

let calculator = new Calculator();
let inputParser = new InputParser();
let processCommandLoop = true;

export function main(): void
{
    while(processCommandLoop){

        const inputStr: string = question('Enter numbers and operators + - * / separated by spaces:\n'); 
        inputParser.recieveInput(inputStr)
        let operatorArray = inputParser.operatorArray;
        let numberArray = inputParser.numberArray;
        let otherArray = inputParser.otherArray;
        calculator.value = parseFloat(numberArray[0])
    
        if(numberArray.length > operatorArray.length){
            for(let i = 0; i < operatorArray.length; i++)
            {
                switch (operatorArray[i]) {
                    case "+":
                        calculator.add(parseFloat(numberArray[i+1]))
                        break;
                        case "-":
                        calculator.subtract(parseFloat(numberArray[i+1]))
                        break;
                    case "*":
                        calculator.multiply(parseFloat(numberArray[i+1]))
                        break;
                    case "/":
                        if(parseFloat(numberArray[i+1]) === 0 && calculator.value !==0){
                            console.log("\n -----------Division By Zero------ \n");
                            console.log("Division by zero is undefined. Exiting now.");
                            console.log("\n --------------------------------- \n");
                            processCommandLoop = false;
                        }
                        calculator.divide(parseFloat(numberArray[i+1]))
                        break;
                    default:
                        break;
                }
            }
        } else {
            for(let i = 0; i < numberArray.length - 1; i++)
            {
                switch (operatorArray[i]) {
                    case "+":
                        calculator.add(parseFloat(numberArray[i+1]))
                        break;
                        case "-":
                        calculator.subtract(parseFloat(numberArray[i+1]))
                        break;
                    case "*":
                        calculator.multiply(parseFloat(numberArray[i+1]))
                        break;
                    case "/":
                        if(parseFloat(numberArray[i+1]) === 0){
                            console.log("\n -----------Division By Zero------ \n");
                            console.log("Division by zero is undefined. Exiting now.");
                            console.log("\n --------------------------------- \n");
                            processCommandLoop = false;
                        }
                        calculator.divide(parseFloat(numberArray[i+1]))
                        break;
                    default:
                        break;
                }
            }
        }
    
        for(let j = 0; j < otherArray.length; j++){
            switch(otherArray[j]){
                case "h":
                case "help":
                case "?":
                    console.log("\n -----------Help Console---------- \n");
                    console.log("Enter numbers and operators + - * / separated by spaces. \n\nIf you would like to exit the program please enter q, x, exit, or quit");
                    console.log("\n --------------------------------- \n");
                    break;
                case "q":
                case "x":
                case "exit":
                case "quit":
                    console.log("\n -----------Exiting CLI----------- \n");
                    console.log("\nThank you for using the CLI RPN Calculator. Exiting now.");
                    console.log("\n --------------------------------- \n");
                    processCommandLoop = false;
                    break;
            }
        }
        console.log("\n -----------Returned Value--------- \n");
        console.log("The value returned by those values and operands is " + calculator.value);
        console.log("\n --------------------------------- \n");
        
    }
}

main();

