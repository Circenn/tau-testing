
// only() for exclusive test.
// skip() to evade a test. Writting an x at the beggining also works.ex: xit ("")
// empty test will appear Pending on the terminal.


var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    var a = 10;
    var b = 10;

  // 1. Addition
 it.skip('Addition of two numbers', function(){
 
    var c = a+b;
    assert.equal(c,20);
 
    });

  // 2. Subtraction
 it('Subtraction of two numbers', function(){

    var c = a-b;
    assert.equal(c,0);

    });

  // 3. Multiplication
it('Multiplication of two numbers', function(){

    var c = a*b;
    assert.equal(c,100);
 
    });

  // 4. Division
it('Division of two numbers', function(){

    var c = a/b;
    assert.equal(c,1);
  
    });

it('this is a test for Pending Test Feature');

it('prueba caca', function(){
const calc = Math.round((1+2) / (3+4))
    // assert.equal( (1+2) / (3+4),0,428571429 )
    assert.equal( calc,0 )

})


});