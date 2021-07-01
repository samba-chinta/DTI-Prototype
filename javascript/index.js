let logBtn = document.getElementById("login");
let logDiv = document.getElementById("login-form");
let signBtn = document.getElementById("signup");
let signDiv = document.getElementById("signup-form");
let otpDiv = document.getElementById("otp");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let pswrdEvent = document.getElementById("pswd");

pswrdEvent.onkeyup = (e) => {
  let reg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (pswrdEvent.value.length <= 8){
    pswrdEvent.style.color = "#f50057";
  }
  else {
    if (reg.test(String(pswrdEvent.value))){    
      pswrdEvent.style.color = "#00c853"; 
    } else {
      pswrdEvent.style.color = "#f50057";
    }
  }
}

logBtn.onclick = () => {
  otpDiv.style.left = "450px";
  logDiv.style.left = "0px";
  signDiv.style.left = "450px";
  logBtn.style.backgroundColor = "#fff";
  signBtn.style.backgroundColor = "#2979FF";
  logBtn.style.color = "#000";
  signBtn.style.color = "#fff";
}

signBtn.onclick = () => {
  otpDiv.style.left = "450px";
  logDiv.style.left = "450px";
  signDiv.style.left = "0px";
  signBtn.style.backgroundColor = "#fff";
  logBtn.style.backgroundColor = "#2979FF";
  signBtn.style.color = "#000";
  logBtn.style.color = "#fff";
}

next.onclick = () => {
  otpDiv.style.left = "0px";
  signDiv.style.left = "450px";
  logDiv.style.left = "450px";
}

prev.onclick = () => {
  otpDiv.style.left = "450px";
  signDiv.style.left = "0px";
  logDiv.style.left = "450px";
}