function createCalendar(id, year, month){
    'use strict';
    
    month = month - 1;
    
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let container = document.createElement('div');
    
    container.id = id;

    firstDay = firstDay.getDay();
    lastDay = lastDay.getDate();
    firstDay === 0 ? firstDay = 7 : firstDay = firstDay;
    let daysWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let table = document.createElement('table');
    table.innerHTML = '';
    let thead = document.createElement('thead');
    for(let i = 0; i < daysWeek.length; i++){
        let th = document.createElement('th');
        th.innerHTML = daysWeek[i];
        thead.appendChild(th);
    }

    let cols = daysWeek.length;
    let rows = 6;
    let tbody = document.createElement('tbody');
    
    for(let i = 0; i < rows; i++){
        
        let tr = document.createElement('tr');
        for(let j = 0; j < cols; j++){
            let td = document.createElement('td');
            td.innerHTML = '';
            tr.appendChild(td);

        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);

    document.body.appendChild(container);

    let cells = document.querySelectorAll('td');
    let startMonth = 1;
    for(firstDay = firstDay - 1; firstDay < cells.length; firstDay++){
        cells[firstDay].innerHTML = startMonth;
        startMonth++;
        if(startMonth > lastDay) {
            break;
        };
    }
};
