'use strict';

let a = {
  name: 'Misha',
  order: {
    price: 20
  },
};

let b = {
  name: 'Misha',
  order: {
    price: 20,
  }
};


//console.log(a === b);


function deepEqual(a, b) {
  let string = '';
  function objToStr(obj){
    for(let key in obj){
      if(typeof a[key] === 'object'){
        string += '1' + key;
        objToStr(obj[key]);
      } else {
        string += key + obj[key];
      }
    }
    return string;
  }
  
  let str1 = objToStr(a);
  //Костыль!:)
  string = '';
  let str2 = objToStr(b);
  
  if(str1 === str2){
    return true
  }
  return false;
}
