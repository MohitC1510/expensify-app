// const person={
//     name: 'Mohit',
//     age: 23,
//     location :{
//         city: 'Amla',
//         temp: 32
//     }
// };
// const {name: firstname='Anonymous',age}= person;
// // const name=person.name;
// // const age=person.age;
// console.log(`${firstname} age ${age} is currently living in ${person.location.city} where temprature is ${person.location.temp} degree celcius`)

// //object under object destructuring
// //renaming variables
// const {city,temp: temperature}=person.location;
// if(city && temperature){
//     console.log(`A city ${city} where temprature is ${temperature} degree celcius`)
// }
// const book={
//     name: 'The rationale male',
//     author: "Rollo Tommasi" ,
//     publisher :{
//         // name: 'Penguin'
//     }
// };
// const {name, author} = book;
// const {name: publishername="own published"} =book.publisher;
// if(publishername){
//     console.log(`${name} was written by ${author} and was publlished by ${publishername}`)
// }

const address=[];
const [street, city, state='New york', zip]=address;
console.log(`the street ${street} is in ${state}`)
