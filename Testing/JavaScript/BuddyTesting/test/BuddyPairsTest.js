var assert = require('assert');
let buddy = require('../BuddyPairs.js');

describe('The function should return buddypairs.', function(){

    it('Should return the correct values.', function(){
        assert.deepEqual("Nothing", buddy.myFunction(2382,3679));
    });
    
    it('Should return the correct values.', function(){
        assert.deepEqual([48,75], buddy.myFunction(23,4669));
        // assert.deepEqual(123, buddy.myFunction(23,4669));
    });

    it('Should return the correct values.', function(){
        assert.deepEqual([5775,6128], buddy.myFunction(4952,6539));
        // assert.eql([5775,6128], buddy.myFunction(4952,6539));
    });

    it('Should return the correct values.', function(){
        assert.deepEqual([1050,1925], buddy.myFunction(381,4318));
        // assert.to.have.members([1050,1925], buddy.myFunction(381,4318));
    });
})