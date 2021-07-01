window.onload = () => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log("Latitude is " + pos.coords.latitude +
            "& Longitude is " + pos.coords.longitude);
      getLocName(pos.coords.latitude, pos.coords.longitude);
    });
  }
  else {
    console.log("Access Denied");
  }
}

const getLocName = (latitude,longitude) => {
  var request = new XMLHttpRequest();

  request.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.0e58a49527de87ee86d6cc4216177243&lat=" +
      latitude + "&lon=" + longitude + "&format=json", true);
  request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
      var data = JSON.parse(request.responseText);
      confirm("Your Location is " + data.address.city);
    }
  };
  request.send();
};