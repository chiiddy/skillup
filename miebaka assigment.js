// function economicGrowth (production, currency) {
//     console.log (production, currency);
//     const development = 'when the per capita of {nigeria} of its citizens are high'
//     return development;
// }
// const country = economicGrowth()
// console.log (country);

// // Assignment of Miebaka
// let firstName = prompt('please enter firstname');
// let lastName = prompt('please enter lastname');
// console.log(firstName + " " + lastName)

// var sum = 5 + 5; 
// console.log(sum)

// function foodProcessor (apples, oranges) {
//     const juice ='it cost ${apples} apples, ${oranges} oranges for need';
//     return juice;
// }
// const costJuice = foodProcessor(1, 1);
// console.log(costJuice);
//  let prime = 21
//  console.log(prime)


//  let john = {
//     name: 'john',
//     sayHi: function () {
//         console.log('hi john')
//     }
//  }
// john.sayHi();
// // example dont forget using the dot to call out a variable
// var joe = 'Hello';
// console.log(joe.toUpperCase());

// let n = 1.23456;
// console.log(n.toFixed(0));


// assignment
// create a script that prompts the user to enter two numbers and then shows their sum 
// let var = 5


// Miebaka first assignment
// let a = 34;
// let b = 21;
// console.log(a + b);

// if (a + b < 100) {
//     console.log("true");
// }
// else if (a + b > 100) {
//     console.log("false");
// }

// Second assignment

// function fac ( n ) {
//     if ( n == 0)
//     return 1;
//     else
//     return fac ( n - 1) * n ;
//     }

// let joe = [5, 1, 8, 2, -10,4, 6]
// console.log (joe.reverse().sort());

    // you have an array of user objects, each one has user.name.
    // write the code that converts it into an array of names
    const users = [
        {
            name: 'john', age: 30
        },
        {
            name: 'peter', age: 25
        },
        {
            name: 'mary', age: 28
        }
    ];
    users.map((value, index) => {
        console.log('These are all the users:', value.name, 'and this are the age:', value.age);
    }