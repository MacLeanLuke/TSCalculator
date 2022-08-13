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