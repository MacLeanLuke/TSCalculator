/**
 * Calculator is a class object that is used by the main application to calculate the Returned value
 * - "add": adds the input to the object property value
 * - "subtract": reduces the value of the object property value by the input amount
 * - "multiply": increases the object propert value by the input multiplier argument
 * - "divide": divides the object property value by the input divisor argument
 */

export class Calculator {
    value: number
    
    constructor(){
        this.value = 0
    }

    add(arg0: number): number {
        this.value += arg0
        return  this.value;
    }

    subtract(arg0: number): number {
        this.value -= arg0
        return  this.value;
    }

    multiply(arg0: number): number {
        this.value *= arg0
        return  this.value;
    }

    divide(arg0: number): number {
        this.value /= arg0
        return  this.value;
    }

}