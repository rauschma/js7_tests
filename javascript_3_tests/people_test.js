var assert = require('assert');
var people = require('../../js7_code/javascript_2_code/people');

var john = new people.Person('John');
assert.equal(john.describe(), 'Person called John');

var jane = new people.Employee('Jane', 'CTO');
assert.equal(jane.describe(), 'Person called Jane (CTO)');
