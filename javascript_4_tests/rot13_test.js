var assert = require('assert');
var rot13 = require('../../js7_code/javascript_2_code/rot13');

assert.strictEqual(rot13(rot13('hello')), 'hello');
assert.strictEqual(rot13('nice'), 'avpr');
assert.strictEqual(rot13('avpr'), 'nice');
assert.throws(function () {
    rot13('HELLO');  // no capital letters allowed
});
