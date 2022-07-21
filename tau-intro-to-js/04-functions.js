function sum(a, b){
    return a+b;
}

console.log(sum(10, 10)); // 20

/**
 * ES5 ecmascriopt 5 older version 
 */
const peepiro = 'aksdhkjfhsd'
function product(a, b){
    console.log(peepiro);
    const prueba = 1 // private constant, parent doesnt have access to it
    return a*b;
}





/**
 * ES6 newer version of ecmascript (latest is es7)
 */
const product = (a,b) => {
    return a*b;
}
const product = (a,b) => a*b // exactly the same as L:17
const product = (a,b) => (a*b) // exactly the same as L:20 - it implies a return without needing to write it explicitly 

console.log(product(12, 12)); // 144

const bigProduct = product(2344, 5435234);
console.log(bigProduct);

setTimeout(function () {
    console.log("hey! you rock!!!");
}, 1000);

setTimeout(() => console.log("hey! you rock!!!"), 1000); // Arrow function mejor perfomance y mas limpico.

setTimeout(() => {
    console.log("hey! you rock!!!")
}, 1000); 
