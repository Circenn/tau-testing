const names = ["Mark", "Sarah", "Ebony"]; // Array type string.

// for is the LOOP statement. (let i = 0; means "Start the loop at index 0". 
// i < names.length; means while the condition is not fullfilled keep looping
// i++) means after executing the loop body function it increments the index. This makes the loop continue without problems. 

for (let i = 0; i < names.length; i++){

    console.log(names[i]); // 0, 1, 2
 } 

const numbers = [1, 2, 3, 4];

for (let j = 0; j < numbers.length; j++){
    console.log(numbers[j] * 2);
}