import {Calculator} from './src/calculator';
import {InputParser} from './src/inputParser';
import {question } from 'readline-sync';

let calculator = new Calculator();
let inputParser = new InputParser();

export function main(): void
{
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
                    calculator.divide(parseFloat(numberArray[i+1]))
                    break;
                default:
                    break;
            }
        }
    } else {
        for(let i = 0; i < numberArray.length; i++)
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
                    calculator.divide(parseFloat(numberArray[i+1]))
                    break;
                default:
                    break;
            }
        }
    }


    console.log(calculator.value);
    console.log(numberArray);
    console.log(operatorArray);

    // for(let j = 0; j < otherArray.length; j++){
    //     if(otherArray[j] === "q"){
    //         console.log("thanks for playing");
    //         process.exit()
    //     } 
    // }
    main();
}

main();

