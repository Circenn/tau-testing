const car = {
    price: 2000,
    color: "blue",
    numDoors: 5
};

// Sign || means "or". Sign && means "and". The line above translate to:  If the car price is less than 2000$ OR the car color is red AND it has 3 doors => we'll take it!.
// In the case above

if (car.price < 2000 || (car.color === "red" && 
    car.numDoors === 3)){
        console.log("We'll take it!");
} else {
      console.log("Welp, it's best to keep looking");      
}

// In the code above we use && "AND" to indicate that we need 3 conditions so the IF is true. It translates to: the car must be less than 2000$, it has to be red and it has to have 4 doors.

if (car.price < 2000 && car.color === "red" && 
    car.numDoors === 4){
        console.log("We'll take it!");
} else {
        console.log("Welp, it's best to keep looking");      
}

// In the code above we use || "OR" to indicate that we need just one of the conditions for the IF to be true. It translates to: the car could cost less than 2000$ or be red or have 4 doors.

if (car.price < 2000 || car.color === "red" || 
    car.numDoors === 4){
        console.log("We'll take it!");
} else {
        console.log("Welp, it's best to keep looking");      
}