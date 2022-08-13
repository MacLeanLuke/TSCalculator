import {main} from '../index';
import {expect} from 'chai'

describe('main',()=>{

    it('should initialise with a calculated value of 0', ()=>{
        expect(main).to.equal(0)
    })

})