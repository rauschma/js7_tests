var assert = require('assert');
var people = require('../../js7_ha/javascript_3_ha/people');
var Person = people.Person;
var Employee = people.Employee;

var john = new Person('John');
assert.equal(john.describe(), 'Person called John');
assert.equal(john.name, 'John');
assert.ok(john instanceof Person);
assert.ok(john.describe === Person.prototype.describe);

var jane = new Employee('Jane', 'CTO');
assert.equal(jane.describe(), 'Person called Jane (CTO)');
assert.equal(jane.name, 'Jane');
assert.equal(jane.title, 'CTO');
assert.ok(jane instanceof Person);
assert.ok(jane instanceof Employee);
assert.ok(jane.describe === Employee.prototype.describe);
