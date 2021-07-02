let addBtn = document.getElementById("add-btn");
let tabCon = document.getElementById("container");
let wrapper = document.getElementById("wrapper");
let editWrapper = document.getElementById("modifing-wrapper");
let tab = document.getElementById("myTable");

let medicine_lst = [
  {'medicine' : 'Paramol','used': 'Fever','count': 10, 'cost'  : '10'},
  {'medicine' : 'Paracetemol','used': 'Fever','count': 20,'cost'  : '15'}
];

window.onload = () => {
	for(i of medicine_lst){
		const row = `<tr class="row">
			<td contenteditable="true">${i.medicine}</td>
			<td contenteditable="true">${i.used}</td>
			<td contenteditable="true">${i.count}</td>
			<td contenteditable="true">Rs. ${i.cost}</td>
		</tr>`;
	tab.innerHTML += row;
	}
}

class myMedicine{
	constructor(name, used, count, cost){
		this.medicine = name;
    this.used = used;
		this.count = count;
		this.cost = cost;
	}
	getJson(){
		return {
			'medicine' : this.medicine,
      'used' : this.used,
			'count' : this.count,
			'cost' : this.cost
		}
	}
}

addBtn.onclick = () => {
	tabCon.style.display = "none";
	wrapper.style.display = "flex";
}

document.getElementById("add").onclick = (e) => {
	let medName = document.getElementById("medicine").value;
  let usesFor = document.getElementById("usesFor").value;
  let n = document.getElementById("count").value;
	let cost = document.getElementById("cost").value;
	if(medName == '' || cost == ''){
		alert("Please enter all details");
	}else{
		let newMedicine = new myMedicine(medName, usesFor, n, cost);
		appendRow(newMedicine.getJson());
	}
	e.preventDefault();
}

// adding the received data to the table
function appendRow(newJson){
	medicine_lst.push(newJson);
	const row = `<tr class="row">
			<td contenteditable="true">${newJson.medicine}</td>
			<td contenteditable="true">${newJson.used}</td>
			<td contenteditable="true">${newJson.count}</td>
			<td contenteditable="true">Rs. ${newJson.cost}</td>
	</tr>`;
	tab.innerHTML += row;
	wrapper.style.display = "none";
	tabCon.style.display = "block";
}