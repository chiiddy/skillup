// var epochnumbers = [3,4,5,9,7,8];
// console.log(epochnumbers[3]);

// creating an object to get a particular data 

// var newObject = {
//     car: 'Benz',
//     food: 'rice',
//     color: 'white'
// }
// console.log(newObject.car)

// // to sort an array aphabetically
// var myarray = ['red', 'blue', 'white', 'black'];
// console.log(myarray.sort());

// to make an array be in front or back
//    var myarray = ['red', 'blue', 'white', 'black'];
//    myarray.push('white');
//    myarray.unshift('yellow');
//    console.log(myarray.sort());

// WORKING ON FUNCTIONS


function foodProcessor (apples, oranges) {
    const juice ='it cost ${apples} apples, ${oranges} oranges for need';
    return juice;
}
const costJuice = foodProcessor(5, 4);
console.log(costJuice);
const ebaFufu = foodProcessor (3,7);
console.log(ebaFufu);

