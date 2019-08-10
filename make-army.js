function makeArmy(a){
    let shooters = [];

    for(let i = 0; i < a; i++){
        let shooter = function(){
            let num = i;
            return num;
        }

        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy(10);
