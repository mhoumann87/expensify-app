// Object deconstructing

// const person = {
//   name: "Michael",
//   age: 50,
//   location: {
//     city: 'Herlufmagle',
//     temperature: 62
//   }
// };
//
// const {name = "Anonymous", age} = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${name} is ${age}`);
//
// const {temperature: temp, city} = person.location;
//
// if (temp && city) {
//   console.log(`It is ${temp} in ${city}`);
// }
//
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
//
// const {name: publisherName = "self published"} = book.publisher;
//
// console.log(publisherName);

// Array deconstructing
console.log("===============================================");

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];
const [street, city, state = "New York", zip] = address;
console.log(`You are in ${city} ${state}`);

const item = ["Coffee (Hot)", "$2.00", "$2.50", "$2.75" ];
const [drink, small, medium, large] = item;
console.log(`A medium ${drink} cost ${medium}`);
