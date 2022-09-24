'use strict';

// Destructuring 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze',
    categories: ['Italian', 'Pizzeria', 'Vegetarian'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
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
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
            );
    },
    
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
    },

    // REST arguments
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

};


const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

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

rest1.owner &&= '<ANONYMOUS>'; // AND nullish
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);



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
