// const person ={
//     name: 'Sifad Niaz',
//     age:20,
//     profession: 'developer',
//     salary: 20000,
//     married: false
// }

// console.log(person);

//** Dot notation / dot symbol diye object er property er value access kora*/
   
// console.log(person.profession);
// const income = person.salary;
// console.log(income);





const person ={
    name: 'Sifad Niaz',
    age:20,
    profession: 'developer',
    salary: 20000,
    married: false,
    'fav places': ['noyakhali', 'borishal', 'bolla', 'shalrtoli']
}

//** Bracket Notation / third bracket diye access kora*/
// console.log(person['age']);
// const boyos = person['name']
// console.log(boyos);
// console.log(person["fav places"]);

// const keyName = 'profession';
// console.log(person[keyName]);

const propName = 'profession';
person[propName] = 'devops'
console.log(person);