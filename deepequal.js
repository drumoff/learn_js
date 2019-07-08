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


console.log(a === b);


function deepEqual(a, b) {
    
    for(let key1 in a){
        
        for(let key2 in b){
            if(key1 === key2){
                if(typeof a[key1] == "object" && typeof b[key2] == "object"){
                    let c = a[key1];
                    let d = b[key2];
                    deepEqual(c, d);
                } else if(a[key1] === b[key2]) {
                    continue;
                } else if((a[key1] === b[key2])){
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}

deepEqual(a, b);
