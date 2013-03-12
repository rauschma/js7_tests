var assert = require('assert');
var sort = require('../../js7_code/javascript_3_code/sort');

assert.deepEqual(sort.sortStrings([]), []);

// Sorting is case-insensitive
assert.deepEqual(sort.sortStrings(['c', 'b', 'a']), ['a', 'b', 'c']);
assert.deepEqual(sort.sortStrings(['C', 'A', 'b']), ['A', 'b', 'C']);

// Non-strings are converted to string
assert.deepEqual(sort.sortStrings(['a', null, 'b']), ['a', 'b', null]);
assert.deepEqual(sort.sortStrings(['b', 1, 'a']), [ 1, 'a', 'b' ]);
