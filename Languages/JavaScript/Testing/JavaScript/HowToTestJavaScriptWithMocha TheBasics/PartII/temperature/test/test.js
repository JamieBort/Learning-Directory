// var require = require('assert');
var assert = require('assert');
let convert = require('../app.js')

describe('Temperature Conversion', function () {

    describe('cToF', function () {
        // test goes here.
        it('should convert -40 degrees celsius to -40 degrees fahrenheit', function () {
            assert.equal(-40, convert.cToF(-40));
        });
        it('should convert 0 degrees celsius to 32 degrees fahrenheit', function () {
            assert.equal(32, convert.cToF(0));
        });
        it('should return undefined if an interger is not entered', function () {
            assert.equal(undefined, convert.cToF(" "));
        });
    });

    describe('fToC', function () {
        // test goes here.
        it('should convert -40 degrees fahrenheit to -40 degrees celsius', function () {
            assert.equal(-40, convert.fToC(-40));
        });
        it('should convert 32 degrees fahrenheit to 0 degrees celsius', function () {
            assert.equal(0, convert.fToC(32));
        });
        it('should return undefined if an interger is not entered', function () {
            assert.equal(undefined, convert.fToC(NaN));
        });
    });


    // describe('fToC', function () {
    //     // test goes here.
    //     //     // it('should convert -40 degrees fahrenheit to -40 degrees celsius', function () {
    //     //     //     assert.equal(-40, convert.fToC(-40));
    //     // });
    //     it('should convert 32 degrees fahrenheit to 0 degrees celsius', function () {
    //         assert.equal(0, convert.fToC(32));
    //     });
    // });
});