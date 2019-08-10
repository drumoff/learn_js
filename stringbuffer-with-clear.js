function makeString(){
    let fullString = '';
    
    function fn(string = ''){
        return fullString += string;
    }
    fn.clear = function(){
        fullString = '';
        return;
    }

    return fn;
    
}

str = makeString();
str(1);
str(2);

console.log(str());

str.clear();


console.log(str());
str(';kjhadskfhg.kadf');
console.log(str());
