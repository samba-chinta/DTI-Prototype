//let btn = document.getElementById("btn");
let tabCon = document.getElementById("container");
//let wrapper = document.getElementById("wrapper");
let tab = document.getElementById("myTable");

// medicine_lst 
// can redirect database table to it
let medicine_lst = [
  {'medicine' : 'Paramol','available' : 'Yes','used': 'Fever', 'cost'  : '10'},
  {'medicine' : 'Paracetemol','available' : 'Yes','used': 'Fever','cost'  : '15'}
];

// loads when user logged in, with available data in medicine_tab
window.onload = () => {
	for(i of medicine_lst){
		const row = `<tr class="row"><td>${i.medicine}</td><td>${i.available}</td>
                <td>${i.used}</td><td>Rs. ${i.cost}</td></tr>`;
	tab.innerHTML += row;
	}
}