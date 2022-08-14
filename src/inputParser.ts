
export class InputParser {
    inputArray: string[];
    operatorArray: string[];
    numberArray: string[];
    otherArray: string[];
    
    constructor(){
        this.inputArray = [];
        this.operatorArray = [];
        this.numberArray = [];
        this.otherArray = [];
    }

    recieveInput(inputString: string ): void {
        this.inputArray = inputString.split(" ")
        
        for(let i = 0; i < this.inputArray.length; i++)
        {
            // console.log(this.inputArray[i])
            if(this.isNumber(this.inputArray[i]))
            {
                this.numberArray.push(this.inputArray[i])
            }
            else if(this.isOperator(this.inputArray[i]))
            {
                this.operatorArray.push(this.inputArray[i])
            }
            else 
            {
                this.otherArray.push(this.inputArray[i])
            }

        }

    }

    isNumber(str: string): boolean
    {
        const maybeFloat = parseFloat(str);
        const isNum: boolean = !isNaN(maybeFloat);
        return isNum
    }

    isOperator(operator: string):boolean
    {
        switch(operator)
        {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
            default:
                return false;
        }
    }

}