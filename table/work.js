const userForm = document.querySelector('#user-form');
const table = document.querySelector('#users-table');
const formButton = userForm.querySelector('[type="submit"]');
const tableStoreKey = 'userTable'
const tableData = getFromStorage(tableStoreKey) || [];

drawTable(tableData, table);

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = getFormData();

    addToTableData(formData);

    drawTable(tableData, table);

    saveToStorage(tableStoreKey, tableData);
})

function addToTableData(data) {
    tableData.push(data);
}

function deleteFromTableData(index) {
    tableData.splice(index, 1);
}

function deleteItemAndDraw(index) {
    deleteFromTableData(index);

    drawTable(tableData, table);

    saveToStorage(tableStoreKey, tableData);
}

function drawTable(rows, tableElement) {
    clearTable(tableElement);
    rows.forEach((row, index) => addTableRow(row, tableElement, index));

    function clearTable(table) {
        table.innerHTML = '';
    }
}

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, data) {
    const transformedData = JSON.stringify(data);
    localStorage.setItem(key, transformedData);
}

function getFormData() {
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


function addTableRow(row, table, index) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdCountry = document.createElement('td');
    const tdAdress = document.createElement('td')
    const tdDate = document.createElement('td')
    const tdMale = document.createElement('td');
    const tdFamstat = document.createElement('td');
    const tdWithButton = document.createElement('td');
    const deleteButton = createButton(() => deleteItemAndDraw(index));

    tr.style.backgroundColor = row.color;

    tdName.innerText = row.name;
    tdAge.innerText = row.age;
    tdCountry.innerText = row.country;
    tdAdress.innerText = row.adress;
    tdDate.innerText = row.date;
    tdMale.innerText = row.male;
    tdFamstat.innerText = row.family_status;

    tdWithButton.appendChild(deleteButton);

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdAdress)
    tr.appendChild(tdDate);
    tr.appendChild(tdFamstat)
    tr.appendChild(tdCountry);
    tr.appendChild(tdMale);
    tr.appendChild(tdWithButton);
    table.appendChild(tr);
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

function createButton(clickHandler) {
    const button = document.createElement('button');
    button.addEventListener('click', () => clickHandler());
    button.innerText = 'x';

    return button;
}
