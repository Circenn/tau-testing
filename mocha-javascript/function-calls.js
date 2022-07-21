// A describe() function is a simple way to group our tests in Mocha.
// The it() function is a way to describe the individual test cases.

// Add
// Sub
// Multiplication
// Division

// describe ('Mathematical Operations - Test Suite', function(){
//     it("test", ()=>{
//         assert.equal(20,20);
//     })

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

  // 1. Addition
  it('Addition of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a+b;
    assert.equal(c,20);
     });

  // 2. Subtraction
  it('Subtraction of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a-b;
    assert.equal(c,0);
  });

  // 3. Multiplication
  it('Multiplication of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a*b;
    assert.equal(c,100);
  });

  // 4. Division
  it('Division of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a/b;
    assert.equal(c,1);
  });
// to make it a negative test change the 1 to 0 on the division.
});