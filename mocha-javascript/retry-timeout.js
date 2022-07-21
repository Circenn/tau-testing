// we set the Test to run at 500 miliseconds using this.timeout(500);
// setting setTimeout(done,3000); means that test will run at 3000 miliseconds.
// The test will be negative because exced the miliseconds set (500).


var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

  beforeEach(function(done) {

    this.timeout(500);

    setTimeout(done,3000);
         
  })
  
   
    var a = 10;
    var b = 10;

  // 1. Addition
 it('Addition of two numbers', function(done){

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

});