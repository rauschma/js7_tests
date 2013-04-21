var assert = require('assert');
var hh = require('../../js7_code/javascript_4_code/hangman_helper');

// function computeResult(word, usedChars)

// Done => null
assert.strictEqual(hh.computeResult('abc', [ 'a', 'b', 'c' ]), null);
assert.strictEqual(hh.computeResult('ABC', [ 'a', 'b', 'c' ]), null);

// Still characters to guess => string
assert.strictEqual(hh.computeResult('abc', [ 'a', 'c' ]), 'a_c');
assert.strictEqual(hh.computeResult('ABC', [ 'a', 'c' ]), 'A_C');
assert.strictEqual(hh.computeResult('abc', [ ]), '___');
