'use strict';
var win = document.querySelector('.window');

var i = 0;
var endDate = +new Date(2019, 10, 30);


/*
setInterval(function(){
    var nowDate = +new Date();
    var timer = endDate - nowDate;
    var month = timer / 2628000000;
    var year  = month / 12;
    month1 = Math.floor(month);
    year = Math.floor(year);
    month = month.toFixed(4);
    

   
    

    
    win.innerHTML = year + '.' + month1 + '.<br>' + month;
     

},1000);


//var i = 5;

var z = prompt('Введите число:');
var a = 1;

for (let i = 1; i <= z; i++){
    a *= i;
    console.log(a);
}

alert('факториал числа ' + z + ' равен ' + a);
*/


/*
var a = prompt('Число');

for(let i=1; i <= a; i++){
    if(i%2 == 0 && i > 2){
        continue;
    } else if(i%3 == 0 && i > 3){
        continue;
    } else if(i%5 == 0 && i > 5){
        continue;
    } else if(i%7 == 0 && i > 7){
        continue;
    } else {
        console.log(i);
    }
}
*/

let str = "Строка";

let result = str.repeat(4);

console.log(result);
//window.open('http://google.ru');
//console.log(navigator.userAgent);

let obj = {};
obj['name'] = 'Вася';
obj.surname = 'Петров';

console.log(obj);




console.log(obj);

function isEmpty(obj){
    let result = '';
    for(let key in obj){
        result += key;
    }
    if(result === ''){
        return false;
    }
        return true;
}

let salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

let emptyObj = {};

function summ(obj){
    let res = 0;
    for(let key in obj){
        res += obj[key];
    }
    return res;
}

function maxVal(obj){
    let res = [];
    let i = 0;
    for(let key in obj){
        res[i] = obj[key];
        i++;
    }
    
    res = res.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
    });
    
    let max = res[res.length - 1];
    for(let key in obj){
        if(obj[key] === max){
            return key;
        }
    }
    
    return 'Нет сотрудников';
}