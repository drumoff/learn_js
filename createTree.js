let container = document.getElementById('container');
let data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
        "Лиственница": {},
        "Ель": {}
        },
        "Цветковые": {
        "Берёза": {},
        "Тополь": {}
        }
    }
};

function createTree(container, data){
    let ul = document.createElement('ul');
    container.append(ul);
    for(let key in data){
        let li = document.createElement('li')
        li.innerHTML = key;
        ul.insertAdjacentElement('beforeend',li);
        createTree(li, data[key]);
    }
    
}
