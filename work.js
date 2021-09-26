class tableManagement {

    getFormData() {

        let value = {
            name: userForm.elements.name.value,
            age: userForm.elements.age.value,
            country: userForm.elements.country.value,
            adress: userForm.elements.adress.value,
            date: userForm.elements.date.value,
            male: userForm.elements.male.value,
            family_status: userForm.elements.family_status.value,
            color: userForm.elements.selector_color.value
        }

        return value;
    }



    addTableRow(row, table) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdAge = document.createElement('td');
        const tdCountry = document.createElement('td');
        const tdAdress = document.createElement('td')
        const tdDate = document.createElement('td')
        const tdMale = document.createElement('td');
        const tdFamstat = document.createElement('td');

        const ButDel = document.createElement('Button');
        ButDel.className = 'delete'
        this.butDels = document.querySelectorAll('.delete');

        tr.style.backgroundColor = row.color;

        tdName.innerText = row.name;
        tdAge.innerText = row.age;
        tdCountry.innerText = row.country;
        tdAdress.innerText = row.adress;
        tdDate.innerText = row.date;
        tdMale.innerText = row.male;
        tdFamstat.innerText = row.family_status;
        ButDel.innerText = 'close';

        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdAdress);
        tr.appendChild(tdDate);
        tr.appendChild(tdFamstat);
        tr.appendChild(tdCountry);
        tr.appendChild(tdMale);
        tr.appendChild(ButDel);
        table.appendChild(tr);

        for (let i = 0; i <= objTable.butDels.length; i++) {

            this.butDels[i].id = `delete${i}`
            this.butDels[i].addEventListener('click', removeTableRow)
            
        console.log(tableData);
        }
    }

    drawTable(rows, tableElement) {
        tableElement.innerHTML = '';
        rows.forEach((row) => this.addTableRow(row, tableElement));
    }



}

class storage {

    saveToStorage(key, data) {
        const transformedData = JSON.stringify(data);
        localStorage.setItem(key, transformedData);
    }

    getFromStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

function imposeMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}

let objTable = new tableManagement();
let objStorage = new storage();

function removeTableRow(){
    let checkboxElement = event.target; // элемент который вызвал функцию
    let id = event.target.id
    let idRow = id.replace('delete','');
    tableData.splice(0, idRow);
    table.innerHTML = '';
    tableData.forEach((row) => objTable.addTableRow(row, table));
}


const userForm = document.querySelector('#user-form');
const table = document.querySelector('#users-table');
const formButton = userForm.querySelector('[type="submit"]');
const tableStoreKey = 'userTable';
const tableData = objStorage.getFromStorage(tableStoreKey) || [];

objTable.drawTable(tableData, table);

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = objTable.getFormData();

    tableData.push(formData);
    objTable.drawTable(tableData, table);
    objStorage.saveToStorage(tableStoreKey, tableData);
})
