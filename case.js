// const school = 'Raj uk uttara model school';

// console.log(school);
// console.log(school.toLowerCase());
// console.log(school.toUpperCase());


// UpperCase: ABCD EFG
// LowerCase: abcd efg


//**UpperCase and LowerCase Problem */
// const subject = 'Chemistry';
// const book = 'chemistry';

// if(subject === book){
//     console.log('I am reading book aibar porikkhai fatai felmu');
// }
// else{
//     console.log('hodhai page ultai');
// }



// const subject = 'Chemistry';
// const book = 'chemistry';

// if(subject.toLowerCase === book.toLowerCase){
//     console.log('I am reading book aibar porikkhai fatai felmu');
// }
// else{
//     console.log('hodhai page ultai');
// }



//**White Space Problem (strat and end)*/
// const drink = 'water ';
// const liquid = ' water';

// if(drink === liquid){
//     console.log('pani er opor nam life');
// }
// else{
//     console.log('sea pani ase khaite pari na');
// }


const drink = 'water ';
const liquid = ' water';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor name life');
}
else{
    console.log('sea pani ase khaite pari na');
}