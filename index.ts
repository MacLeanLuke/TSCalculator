import {Calculator} from './src/calculator';
import {InputParser} from './src/inputParser';
import {question } from 'readline-sync';

/**
 * The Main function of this app.
 * - "calculator": instantiates a new object of the class Calculator
 * - "inputParser": instantiates a new object of the class inputParser
 * - "processCommandLoop": while this remains true the application continues to run
 */

let calculator = new Calculator();
let inputParser = new InputParser();
let processCommandLoop = true;

export function main(): void
{
    while(processCommandLoop){

        /**
        * - "inputStr": accepts input from the user throught the terminal and passes it to the receiveInput method from the inputParser class
        * - "operatorArray": instantiating a variable for the inputParser property operatorArray
        * - "numberArray": instantiating a variable for the inputParser property numberArray
        * - "otherArray": instantiating a variable for the inputParser property otherArray
        * - "otherArray": instantiating a variable for the inputParser property otherArray
        * - "calculator.value": setting the value of the inputParser value property to the first element of the numberArray
        */

        const inputStr: string = question('Enter numbers and operators + - * / separated by spaces:\n'); 
        inputParser.recieveInput(inputStr)
        let operatorArray = inputParser.operatorArray;
        let numberArray = inputParser.numberArray;
        let otherArray = inputParser.otherArray;
        calculator.value = parseFloat(numberArray[0])

        /**
        * - if/else logic so that no more operations are made than there are elements in the shorter of the numberArray or the operator Array
        * methods from the calculator object are called on the parsedFloat of each of the elements in the numberArray
        * Switch case controls the logic of which operator is used 
        * If statement is used on the divisor operator for the edge case of a denominator of zero
        */
    
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

        /**
        * A For loop through the otherArray to provide CLI functionality for help and exit commands.
        * If the an exit command is entered, the processCommandLoop variable is set to false and the application stops
        */
    
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
                    console.log("Thank you for using the CLI RPN Calculator. Exiting now.");
                    console.log("\n --------------------------------- \n");
                    processCommandLoop = false;
                    return;
            }
        }

        /**
        * A print statement with the current returned value of calculator property value
        */
        console.log("\n -----------Returned Value--------- \n");
        console.log("The value returned by those values and operands is " + calculator.value);
        console.log("\n --------------------------------- \n");
        
    }
}

main();

