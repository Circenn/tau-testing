const chai = require('chai');

//expect
const expect = chai.expect;

//should()
const should = chai.should();

//Assert - TDD style
const assert = chai.assert; // no chaining possible

//expect API example – equals with failed test
let a=1, b=2;
expect(a).to.be.equals(b);

//expect API example – equals with failed test error message
a=1, b=2;
expect(a).to.be.equals(b, "a and b are not equal");

//expect API example – equal passing test
a=1, b=1;
expect(a).to.be.equals(b, "a and b are not equal");

//should - simple comparison
a.should.be.equals(b);

//assert – simple comparison
assert.equal(a,b, "a and b are not equal");

//expect - object/string/boolean
function myObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

x = new myObj(), y = new myObj();
expect(x).to.be.an('object');

//expect - object/string/boolean – with equality check
function myObj(){
    return{
        a: 100,
        b: 'Hello'
    }
}

x = new myObj(), y= new myObj();
expect(x).to.be.an('object');
expect(x).to.be.equals(y, 'x and y are not equal');

//expect - deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'x and y are not equal');

//should – object comparison with deep.equal or deep.equals
x.should.be.deep.equals(y, 'x and y are not equal');

//assert – object comparision
assert.deepEqual(x,y, "x and y are not equal");

// chaining expressions. x is an object; x and y are equal. keywords - and, with, but ...

//expect - chaining expressions
expect(x).to.be.an('object').and.to.be.deep.equals(y);

//should - chaining expressions
(x).should.be.an('object').and.to.be.deep.equals(y);


//arrays
let numbers = [1,2,3,0];
expect(numbers).to.be.an('array').that.includes(3);

//should - arrays
(numbers).should.be.an('array').that.includes(3);
assert.isArray(numbers, 'numbers is not an array');

//assert – arrays
(numbers).should.be.an('array').that.includes(3);
assert.isArray(numbers, 'numbers is not an array');