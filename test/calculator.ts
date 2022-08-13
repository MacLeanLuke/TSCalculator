import { describe } from 'mocha';
import {expect} from 'chai'
import {Calculator} from '../src/calculator';


describe('calculator',()=>{

    it('should initialise with a calculated value of 0', ()=>{
        let calculator = new Calculator()
        expect(calculator.value).to.equal(0)
    })

    it('should return a result of 5 when performing an addition of 5 immediately after creation', ()=>{
        let calculator = new Calculator()
        expect(calculator.add(5)).to.equal(5)
    }) 

    it('should store the result of an addition performed immediately after creation as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.add(9)
        expect(calculator.value).to.equal(9)
    })

    it('should allow multiple additions to be performed, returning the result of the final addition', ()=>{
        let calculator = new Calculator()
        calculator.add(9)
        calculator.add(2)
        expect(calculator.add(1)).to.equal(12)
    })

    it('should store the result of multiple additions as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.add(5)
        calculator.add(6)
        calculator.add(15)
        expect(calculator.value).to.equal(26)
    })

    it('should return a result of -5 when performing an subtraction of 5 immediately after creation', ()=>{
        let calculator = new Calculator()
        expect(calculator.subtract(5)).to.equal(-5)
    }) 

    it('should store the result of an subtraction performed immediately after creation as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.subtract(9)
        expect(calculator.value).to.equal(-9)
    })

    it('should allow multiple subtractions to be performed, returning the result of the final subtraction', ()=>{
        let calculator = new Calculator()
        calculator.subtract(9)
        calculator.subtract(2)
        expect(calculator.subtract(1)).to.equal(-12)
    })

    it('should store the result of multiple subtractions as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.subtract(5)
        calculator.subtract(6)
        calculator.subtract(15)
        expect(calculator.value).to.equal(-26)
    })

    it('should return a result of 0 when performing an multiplication of 5 immediately after creation', ()=>{
        let calculator = new Calculator()
        expect(calculator.multiply(5)).to.equal(0)
    }) 

    it('should store the result of an multiplication performed immediately after creation as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.multiply(9)
        expect(calculator.value).to.equal(0)
    })

    it('should allow multiple multiplications to be performed, returning the result of the final multiplication', ()=>{
        let calculator = new Calculator()
        calculator.multiply(9)
        calculator.multiply(2)
        expect(calculator.multiply(1)).to.equal(0)
    })

    it('should store the result of multiple multiplications as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.multiply(5)
        calculator.multiply(6)
        calculator.multiply(15)
        expect(calculator.value).to.equal(0)
    })

    it('should return a result of 0 when performing an division of 5 immediately after creation', ()=>{
        let calculator = new Calculator()
        expect(calculator.divide(5)).to.equal(0)
    }) 

    it('should store the result of an division performed immediately after creation as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.divide(9)
        expect(calculator.value).to.equal(0)
    })

    it('should allow multiple divisions to be performed, returning the result of the final division', ()=>{
        let calculator = new Calculator()
        calculator.divide(9)
        calculator.divide(2)
        expect(calculator.divide(1)).to.equal(0)
    })

    it('should store the result of multiple divisions as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.divide(5)
        calculator.divide(6)
        calculator.divide(15)
        expect(calculator.value).to.equal(0)
    })

    it('should allow multiple operations to be performed, returning the result of the final division', ()=>{
        let calculator = new Calculator()
        calculator.add(9)
        calculator.subtract(3)
        calculator.multiply(5)
        expect(calculator.divide(2)).to.equal(15)
    })

    it('should store the result of multiple operations as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.add(5)
        calculator.subtract(6)
        calculator.multiply(6)
        calculator.divide(-2)
        expect(calculator.value).to.equal(3)
    })

    it('should store the result of multiple operations on floats as the new calculated value', ()=>{
        let calculator = new Calculator()
        calculator.add(5.5)
        calculator.subtract(3)
        calculator.multiply(6)
        calculator.divide(-2)
        expect(calculator.value).to.equal(-7.5)
    })

})