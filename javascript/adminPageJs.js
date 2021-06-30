let addBtn = document.getElementById("add-btn");
let tabCon = document.getElementById("container");
let wrapper = document.getElementById("wrapper");
let editWrapper = document.getElementById("modifing-wrapper");
let tab = document.getElementById("myTable");

let medicine_lst = [
  {'medicine' : 'Paramol','available' : 'Yes','used': 'Fever', 'cost'  : '10'},
  {'medicine' : 'Paracetemol','available' : 'Yes','used': 'Fever','cost'  : '15'}
];

window.onload = () => {
	for(i of medicine_lst){
		const row = `<tr class="row">
			<td contenteditable="true">${i.medicine}</td>
			<td contenteditable="true">${i.available}</td>
			<td contenteditable="true">${i.used}</td>
			<td contenteditable="true">Rs. ${i.cost}</td>
		</tr>`;
	tab.innerHTML += row;
	}
}

class myMedicine{
	constructor(name, avail,used, cost){
		this.medicine = name;
		this.availability = avail;
    this.used = used;
		this.cost = cost;
	}
	getJson(){
		return {
			'medicine' : this.medicine,
			'available' : this.availability,
      'used' : this.used,
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
	let availAns = document.getElementById("availabilty").value;
  let usesFor = document.getElementById("usesFor").value;
	let cost = document.getElementById("cost").value;
	if(medName == '' || cost == ''){
		alert("Please enter all details");
	}else{
		let newMedicine = new myMedicine(medName, availAns,usesFor, cost);
		appendRow(newMedicine.getJson());
	}
	e.preventDefault();
}

// adding the received data to the table
function appendRow(newJson){
	medicine_lst.push(newJson);
	const row = `<tr class="row">
			<td contenteditable="true">${newJson.medicine}</td>
			<td contenteditable="true">${newJson.available}</td>
			<td contenteditable="true">${newJson.used}</td>
			<td contenteditable="true">Rs. ${newJson.cost}</td>
	</tr>`;
	tab.innerHTML += row;
	wrapper.style.display = "none";
	tabCon.style.display = "block";
}