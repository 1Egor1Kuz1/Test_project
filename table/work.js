const userForm = document.querySelector('#user-form');
const table = document.querySelector('#users-table');
const formButton = userForm.querySelector('[type="submit"]');

loadFromStorage();


formButton.addEventListener('click', (e) =>{
    e.preventDefault();

    const formData= getFormData();

    addTableRow(formData, table);
    addToStorage(formData);
    selectColor();
})

function loadFromStorage(){
    const table = [];

}

function getFormData(){

    let value ={
        name: document.forms[0].elements.name.value,
        age: document.forms[0].elements.age.value,
        country: document.forms[0].elements.country.value,
        adress: document.forms[0].elements.adress.value,
        date: document.forms[0].elements.date.value,
        male: document.forms[0].elements.male.value,
        family_status: document.forms[0].elements.family_status.value
    }

    return value;
}


function addTableRow(row, table){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdCountry = document.createElement('td');
    const tdAdress = document.createElement('td')
    const tdDate = document.createElement('td')
    const tdMale = document.createElement('td');
    const tdFamstat = document.createElement('td');

    tdName.innerText = row.name;
    tdAge.innerText = row.age;
    tdCountry.innerText = row.country;
    tdAdress.innerText = row.adress;
    tdDate.innerText = row.date;
    tdMale.innerText =row.male;
    tdFamstat.innerText = row.family_status;

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdAdress)
    tr.appendChild(tdDate);
    tr.appendChild(tdFamstat)
    tr.appendChild(tdCountry);
    tr.appendChild(tdMale);;
    table.appendChild(tr);

}

function addToStorage(row){}


// table_color

function selectColor(){
    // присваиваю lastRow последнюю строку таблицы
    let lastRow = table.rows[ table.rows.length - 1 ];
    // ну и остальное...
    const color = document.forms[0].elements.selector_color.value;
    lastRow.style.backgroundColor = color;
}

function updateFirst(event) {
    let tr = document.querySelector("p");
  
    if (tr) {
      p.style.color = event.target.value;
    }
  }

  //Input_number

  function imposeMinMax(el){
    if(el.value != ""){
      if(parseInt(el.value) < parseInt(el.min)){
        el.value = el.min;
      }
      if(parseInt(el.value) > parseInt(el.max)){
        el.value = el.max;
      }
    }
  }
 
