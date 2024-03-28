const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '50mpx',
    isNew: true
}

//for of : array
//for in : object

for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    // console.log(key);
    // console.log(key, mobile[key]);
    console.log(key, ':' ,mobile[key]);
}