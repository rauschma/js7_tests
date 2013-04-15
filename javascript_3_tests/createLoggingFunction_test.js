var assert = require('assert');
var createLoggingFunction = require('../../js7_code/javascript_3_code/createLoggingFunction');

var myMax = createLoggingFunction(Math.max, 'Math.max');
assert.equal(myMax(-5, 7, 2), 7);
