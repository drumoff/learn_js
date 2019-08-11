let calculator = {
    first: '',
    second: '',
    read(){
        this.first = prompt("Первое Свойство");
        this.second = prompt("Второе Свойство");
        
    },
    
    sum(){
        return +this.first + (+this.second)
    },

    mul(){
        return this.first * this.second;
    }
}
