'use strict';

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // console.log(firstName);
    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
            function add(a, b) {
                return a + b;
            }
            output = 'NEW OUTPUT';
        }
        // console.log(str); // Gives error becuase it's a block scope
        console.log(millenial); // No error coz 'var' is global scope
        // console.log(add(2,3)); // it will give error BUT it we remove 'use strict' then it will work
        console.log(output);
    };
    printAge();
    return age;
}
const firstName = 'Jonas';
calcAge(1991);
*/

/*
// Hoisting Variables
console.log(firstName); // undefined
console.log(job); // it's in TDZ. Uncaught ReferenceError: Cannot access 'job' before initialization
console.log(title); // it's in TDZ. Uncaught ReferenceError: Cannot access 'job' before initialization
var firstName = 'Jonas';
let job = 'teacher';
const title = 'Mr';
*/

/* ************************************************
// Functions 
// console.log(addDecoration(2,3)); // 5
// console.log(addExpression(2,3)); //  it's in TDZ. Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2,3)); // it's in TDZ
function addDecoration(a,b) {
    return a + b;
}
const addExpression = function(a,b) {
    return a + b;
}
const addArrow = (a,b) => a+b;
// Examples
// if (!numProducts) deleteShoppingcart(); // Uncaught ReferenceError: Cannot access 'numProducts' before initialization
const numProducts = 10;
function deleteShoppingcart() {
    console.log('All products deleted!');
}
var x = 1;
let y = 2;
const z = 3;
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false
* ***************************************************/


// This keyword/variable
/*
//example1
// console.log(this); // window
const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined coz we are in 'strict mode'. It get it own 'this' keyword
}
calcAge(1991);
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // window because arrow function does not get it own 'this' keyword. It uses 'this' keyword of it parent's/global scope which is 'window'.
}
calcAgeArrow(1991);
// example2
const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
};
jonas.calcAge();
// example3
const matilda = {
    year: 2017,
};
matilda.calcAge = jonas.calcAge; // we copy one object from another
matilda.calcAge(); // this keyword points to matilda object even though the method is written inside jonas object
const f = jonas.calcAge; // we copy one object from another
f(); // uncaught typeError: cannot read property 'year' of undefined at calcAge
*/
/*
// arrow function
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this); // ok
        console.log(2037 - this.year);
        // function inside a method
        // solution 1
        
        const self = this;
        const isMillenial = function () {
            console.log(self); //  ok
            console.log(self.year >= 1981 && self.year <= 1996); // true
        };
        isMillenial();
        
       
        // solution 2
        const isMillenial = () =>  {
            console.log(this); // ok coz arrow function uses this keyword from the parent's scope
            console.log(this.year >= 1981 && this.year <= 1996); // true
        };
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`), // undefined coz arrow function does not get it own 'this' keyword which is window object
};
jonas.greet();
jonas.calcAge();
/*
const isMillenial = function () {
            console.log(this); // Undefined coz regular function gets it own this keyword
            console.log(this.year >= 1981 && this.year <= 1996); // uncaught typeError:
        };
        isMillenial();
*/

/*
// Arguments keyword only exists in regular function which is expression function
const addExpr = function(a,b) {
    console.log(arguments);
    return a + b;
};
addExpr(2,5);
addExpr(2,5,8,12);
// arguments keyword does not exist in arrow function
var addArrow = (a, b) => {
    console.log(arguments); // ReferenceError: argument is not defined at AddArrow
    return a + b;
};
addArrow(2,5,8);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 31
const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
// Primitive tyles
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis William
// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'William',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica); // Jessican Davis 27
console.log('After marriage:', marriedJessica); // Jessican Davis 27
// copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'William',
    age: 27,
    family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
// it changes only first time which is lastName. It won't change on the 2nd and 3rd time
console.log('Before marriage:', jessica2); // Jessica William 27 Alice Bob Mary John
console.log('After marriage:', jessicaCopy); // Jessica Davis 27 Alice Bob Mary John
*/


// ------------------- Destructuring -------------------------------------

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // open 24 hrs
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze',
    categories: ['Italian', 'Pizzeria', 'Vegetarian'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals 
    openingHours,

    // change function expression to ES6 enhanced object literals 
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // change function expression to ES6 enhanced object literals 
    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
            );
    },

    // change function expression to ES6 enhanced object literals 
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
    },

    // change function expression to ES6 enhanced object literals 
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

};




/*
// --------- for of loop ----------
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); // we create a variable 'item' of menu and we loop the entire array and each element we log one by one

// for (const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`); // we start from index 0 and position number 1 
// }
// console.log([...menu.entries()]);

// better method
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}
*/


// const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

// method 1
// rest1.numGuests = rest1.numGuests || 10; // if the rest1 numGuests does not exit then return numGuests = 10  
// rest2.numGuests = rest2.numGuests || 10; // if the rest2 numGuests does not exit then return numGuests = 10 

// method 2 (numGuests: 20)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1); // 20
// console.log(rest2); // 10

// Nullish assignment operators (numGuests: 0)
// rest1.numGuests ??= 10; // OR nullish
// rest2.numGuests ??= 10; 

// rest1.owner = rest1.owner && '<ANONYMOUS>'; // owner: undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // owner: <ANONYMOUS>

// rest1.owner &&= '<ANONYMOUS>'; // AND nullish
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);



/*
///////// nullish operator ///////////////////////////
restaurant.numGuests = 0; 
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish: null and undefined (only it is 0 or '') otherwise it will continue to evaluate the 2nd value and return
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
*/


/*
///////////////////// short-circuiting /////////////////////////
// Use ANY data type, return ANY data type, short-ciruiting.
// short-circuiting: if the 1st value is truthy value it will immediately return that 1st value.
console.log('------OR Operator------');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null => undefined is a falsy value, so it will go to null although null is also a falsy value.
// we want to check if numGuests exist
restaurant.numGuests = 23; 
console.log(restaurant);
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 10
const guest2 = restaurant.numGuests || 10;
console.log(guest2); // 10
// AND operator
console.log('------AND Operator-------');
// the AND operator is FALSE when the 1st value is false, then it means the ENTIRE result of the AND operation will be FALSE anyway. There is no need to even look at any of the other operands.
console.log(0 && 'Jonas'); // 0 : it returns the falsy value of the 1st value is false without even valuating the 2nd value
// the AND operator is TRUE only when all the operands are true
console.log(7 && 'Jonas'); // Jonas : when it's truthy then the valuation continues to the last value is returned.
console.log('Hello' && 23 && null && 'jonas'); // null
// method 1: if orderPizza does exist then get mushroom and spinach
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
// method 2
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/


/*
//////////////////////////////////////////////////
// REST Pattern and Parameters
// 1/ Destructuring 
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
// Objects
const {sat, ...otherDays} = restaurant.openingHours;
console.log(sat, otherDays);
// 2) Functions
const add = function(...numbers) { // REST, then we pack it back again
    let sum = 0;
    for (let i=0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
}
add(2,3); // 5
add(5,3,7,2); // 17
add(7,5,2,3,4,5,6); // 32
const x = [23, 5, 7];
add(...x); // SPREAD, we unpack the value
// REST arguments
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/*
restaurant.orderDelivery({
    time: '23:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 3,
})
*/


///////////////////////////////////////////////////
// SPREAD Operators ...
// We only use spread operators when building a new array or when we pass a value into a function.
// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // [1,2,7,8,9]

// const newArr = [1, 2, ...arr];
// console.log(newArr); // [1,2,7,8,9]

// console.log(...newArr); // 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci]


// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: are arrays, strings, maps, sets. NOT objects
// const str = 'jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// We only use spread operators when building a new array or when we pass a value/ multiple values into a function. Example below
// console.log(`${...str} Schmedtmann`); // SyntaxError: unexpected token '...'

// REAL WORLD EXAMPLES
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), 
// prompt("Ingredient 2?"), 
// prompt("Ingredient 3?")];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Spread operator with Objects
// const newRestaurant = {foundedIn: 1999, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); //Ristorante Roma
// console.log(restaurant.name); //Classico Italiano

/*
//Destructuring method 1
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories); // the same result as method2
//Destructuring method 2
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags); // the same result as method1
// Setting a default value : if we do not have a property name 'menu' we write [] otherwise it will be 'undefined'.
// it is very helpful when we do not have a data in the application
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b:7, c: 14};
// since we cannot assign anything into a code block, we wrap destructuring assignment into parenthesis (), otherwise it will occur syntaxError: Unexpected token '='
({a, b} = obj);
console.log(a, b); // 23 7
// Nested objects
const { fri: {open: o, close: c} } = openingHours;
console.log(o, c); // 11 23
*/


/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x,y,z);
console.log(arr);
let [main, , secondary] = restaurant.categories; // we skip the Pizzaria 
console.log(main, secondary); // Italian Vegetarian
[main, secondary] = [secondary, main];
console.log(main, secondary); //Vegetarian Italian
// Receive 2 return values fro ma function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
// nested array
const nested = [2, 4, [5,6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5,6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6
// Default values
const [p=1, q=1, r=1] =  [8, 9];
console.log(p, q, r);
*/