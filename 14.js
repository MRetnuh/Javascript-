function CreateTables() {
event.target.preventdefault;
  const Number = parseInt(document.getElementById('Number').value);
const table = document.getElementsByTagName('table');
  const thead = document.getElementsByTagName('thead');
  const tbody = document.getElementsByTagName('tbody');
  let binary = binaryInput.value;
  let decimal = Number(decimalInput.value);
    let hexadecimal = hexadecimalInput.value;
const array = ["Decimal", "Binario", "Hexadecimal"]
  const numeros ["decimal", "binary", "hexadecimal"]
  for(let j = 0; j < 3; j++){
const th = document.createElement('th');
  thead.append(th);
  th.textContent = array[j];
  }
  for(let i = 0; i < Number; i++){
  switch(from){
  case "Number":
    decimal = Number(decimalInput.value);
    binary = Number.toString(2);
       hexadecimal = Number.toString(16).toUpperCase()
  break;
}
const tr = document.createElement('tr');
tbody.append(tr);
const td = document.createElement('td');
td.textContent = numeros[i];
tr.append(td);
  }
  }
