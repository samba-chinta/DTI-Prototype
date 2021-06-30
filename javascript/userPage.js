let myData = [
  {"medicine": "Paramol", "cost": 10, "available": "Apollo"},
  {"medicine": "Afigin", "cost": 5, "available": "Apollo"},
  {"medicine": "Avil", "cost": 100, "available": "Apollo"},
  {"medicine": "Sputnik", "cost": 150, "available": "Apollo"},
  {"medicine": "Covishield", "cost": 500, "available": "Apollo"},
  {"medicine": "Dolo", "cost": 20, "available": "Apollo"},
  {"medicine": "Paramol", "cost": 60, "available": "Apollo"},
  {"medicine": "Eno", "cost": 20, "available": "Apollo"},
  {"medicine": "Delta", "cost": 130, "available": "Apollo"},
  {"medicine": "Covaxin", "cost": 400, "available": "Apollo"}
]

let myFunc = (lst) => {
  let tab = document.getElementById("myTable");
  tab.innerHTML = `<tr>
    <th>Medicine</th>
    <th>Cost</th>
    <th>Available</th>
  </tr>`;
  for (const ele of lst) {
    const row = `<tr class="row">
			<td>${ele.medicine}</td>
			<td>Rs. ${ele.cost}</td>
			<td>${ele.available}</td>
	  </tr>`; 
    tab.innerHTML += row;
  }
}

document.getElementById("req").onchange = () => {
  let arr = ["Donate", "Request"];
  let id = document.getElementById("req").value ;
  let reqId = arr.filter((e) => {
    return e != id;
  })
  document.getElementById(id).style.display = "flex";
  document.getElementById(reqId[0]).style.display = "none";
}

document.getElementById("search").addEventListener('keyup', () => {
  let searchItem = document.getElementById("search").value ;
  let newArr = myData.filter((e) => {
    return e.medicine.toLowerCase().includes(searchItem.toLowerCase());
  })
  myFunc(newArr);
})

myFunc(myData)