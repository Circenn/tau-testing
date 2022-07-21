// this is a constant of type object. Between {} there's the properties with the values.
// Properties can be strings, booleans, numbers, etc. All values from JavaScript.
const cookie = {
    name: "Chocolate Chip",
    isGluttenFree: false,
    eatCookie: function(){ // common functions DOES INHERIT what their parent object contains
        console.log("I eat", this.name) ;
        
    },
    "1caca":false,
    caca: () => { // arrow functions doesn inherit what their parent object contains
        console.log("I eat", this.name) ;
    },
};

cookie.caca() // this wont be printing this.name value as it doesnt have access to it
cookie.eatCookie() // this WILL be printing this.name value as it has access to it

const dynamicName = "name" // name is one of cookie properties
cookie[dynamicName] // IN THIS CASE. This is exactly the same as cookie.name or cookie["name"], because dynamicName="name"


cookie["1caca"] // We use [] and "" to acces to a property value that contains a number in the name.ex: 1caca has a number.
cookie.name = "Chip Chocolate"; // Here we change the value of property "name" from the object cookie.
cookie.isGluttenFree = true; // Here we change the value of property "isGluttenFree" from the object cookie.

// cookie = {
//     propname: 3
// }
// forbidden behaviour
//console.log(cookie["+Yummy"]);
console.log(cookie); // poner punto + property si solo queremos ver una. ex: cookie.name o cookie.isGluttenFree

// Classes are template to create objects with same properties but dif. values 
const name = 5
class Cookie {
    constructor(name, isGluttenFree) { // constructor are rules to create the Cookie
       this.name = name; //myCookie.name = name - the 'this' is used to focus on THIS SCOPE 
       this.isGluttenFree = isGluttenFree;       
    }

    eatCookie(){
        console.log('I am Cookie class: I eat ', this.name);
    }
    

    /**
     * What the constructor does, in reality would be similar to make this: 
     * const myCookie = {
            name: "Iced Oatmeal",
            isGluttenFree: false,
        };
     */
}
const myCookie = new Cookie("Iced Oatmeal", false); // here we are creating a new cookie class object.


console.log(myCookie);
myCookie.eatCookie()


const tiposVentana = {
    A: 'abatible',
    B: 'corredera',
    c: 'fija',

    getVentanaTypeName: function(type){
        //type puede ser A, B o C
        return this[type]
    }
}

console.log(tiposVentana);

const getVentanaTypeName = (type)=>{
    //type puede ser A, B o C
    return tiposVentana[type]
}