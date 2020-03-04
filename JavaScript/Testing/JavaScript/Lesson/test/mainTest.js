var assert = require('assert');
let main = require('../main.js');


describe('The proper use of testing with my main.js file', function () {

    it('should return the correct value', function () {
        assert.equal(3, main.myFunction(1,1));
    });
})