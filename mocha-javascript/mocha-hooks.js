// The before() hook will execute the code clock before the test executes from it() function.
// The after() hook will execute the code block after all the tests executes.
// This beforeEach() hook will run the code block before every test execution.
// The afterEach() hook will be running the code block after every text execution.

const { Console } = require("console");

describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests', function(){
        console.log('Execute After All Tests');
    });

    afterEach('Execute After Each Test', function(){
        console.log('Execute Before Each Test');
    });

    it('Mocha Hooks Test', function(){
        console.log('Mocha - This is a Test for Mocha Hooks');
    })

})