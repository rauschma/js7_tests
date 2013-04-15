var assert = require('assert');
var atLeast3 = require('../../js7_code/javascript_3_code/atLeast3');

assert.equal(atLeast3(-5, 1, -8), 3);
assert.equal(atLeast3(-1, 2, 10), 10);
