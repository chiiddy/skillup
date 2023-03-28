// // Input: 
// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

// const ages = input.map((value) => value.age);
// const min = ages.sort()[0];
// const max = ages.sort().reverse()[0];
// // console.log(ages.sort()[0]);
// // console.log(ages.sort().reverse()[0]);
// // therefore
// const difference = max - min;
// console.log(difference);
// or you can use a spread operator which is ... dot dot
// console.log([Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)])

// SET
// let set = new Set();
// let john = {name: "john"};
// let mary = {name: "mary"};
// let pete = {name: "pete"};

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// console.log(set.size);

// let newObjects = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"];
// console.log(Object.entries(newObjects))


// Solving for a map
// Given that "George Raymon Richard Martin", convert the initials and concatenate them
// const outPut = "George Raymon Richard Martin";
// const initials = outPut.split("").map((word) => word[0]).join("");
// console.log(initials);
// Array destructuring
let salaries = {
    "john": 100,
    "peter": 300,
    "Mary": 250
}

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
console.log(sumSalaries(salaries))