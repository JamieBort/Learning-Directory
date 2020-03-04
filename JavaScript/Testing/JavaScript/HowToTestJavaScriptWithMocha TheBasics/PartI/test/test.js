// Require the built in 'assertion' library
var assert = require('assert');

// Create a group of tests about Arrays
describe('Array', function () {
    // Within our Array group, Create a group of tests for indexOf
    describe('#indexOf()', function () {
        // A string explanation of what we're testing
        it('should return -1 when the value is not present', function () {
            // Our actual test: -1 should equal indexOf(...)
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

// Test your learning
// Alright, it’s time to test your learning. Without scrolling down to see the answer, write the following test:

// Create a test group named Math
describe('Math', function () {
    // Create two tests within the group Math.

    // Test one: Should test if 3*3 = 9
    it('should return 9 because 3*3=9.', function () {
        assert.equal(9, 3 * 3);
    });
    // Test two: Should test if (3–4)*8 = -8
    it('should return -8 because (3–4)*8 = -8.', function () {
        assert.equal(-8, (3-4) * 8);
    });
});



// Create a test suite (group) called Math
describe('Math', function () {
    // Test One: A string explanation of what we're testing
    it('should test if 3*3 = 9', function () {
        // Our actual test: 3*3 SHOULD EQUAL 9
        assert.equal(9, 3 * 3);
    });
    // Test Two: A string explanation of what we're testing
    it('should test if (3-4)*8 = -8', function () {
        // Our actual test: (3-4)*8 SHOULD EQUAL -8
        assert.equal(-8, (3 - 4) * 8);
    });
});