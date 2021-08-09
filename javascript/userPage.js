let myData = [
  {"medicine": "Paramol", "cost": 10, "available": "Apollo", "count": 100},
  {"medicine": "Afigin", "cost": 5, "available": "Keerthi Store", "count": 20},
  {"medicine": "Avil", "cost": 100, "available": "Sneha Medical store", "count": 35},
  {"medicine": "Sputnik", "cost": 150, "available": "Amrutha Medical Store", "count": 31},
  {"medicine": "Covishield", "cost": 500, "available": "PVR Medical Store", "count": 25},
  {"medicine": "Dolo", "cost": 20, "available": "MedPlus", "count": 20},
  {"medicine": "Paramol", "cost": 60, "available": "Apollo Pharmacy", "count": 73},
  {"medicine": "Eno", "cost": 20, "available": "Nexus Pharmacy", "count": 92},
  {"medicine": "Delta", "cost": 130, "available": "Apollo", "count": 87},
]

let myFunc = (lst) => {
  let tab = document.getElementById("myTable");
  tab.innerHTML = `<tr>
    <th>Medicine</th>
    <th>Cost</th>
    <th>Available at</th>
    <th>Count</th>
  </tr>`;
  for (const ele of lst) {
    const row = `<tr class="row">
			<td>${ele.medicine}</td>
			<td>Rs. ${ele.cost}</td>
			<td>${ele.available}</td>
      <td>${ele.count}</td>
	  </tr>`; 
    tab.innerHTML += row;
  }
}

document.getElementById("req").onchange = () => {
  let arr = ["Donate", "Request"];
  let id = document.getElementById("req").value ;
  if(id != null){
    let reqId = arr.filter((e) => {
      return e != id;
    })
    document.getElementById(id).style.display = "flex";
    document.getElementById(reqId[0]).style.display = "none";
  }
}

document.getElementById("search").addEventListener('keyup', () => {
  let searchItem = document.getElementById("search").value ;
  let newArr = myData.filter((e) => {
    return e.medicine.toLowerCase().includes(searchItem.toLowerCase());
  })
  myFunc(newArr);
})

myFunc(myData)