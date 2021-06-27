let logBtn = document.getElementById("login");
let logDiv = document.getElementById("login-form");
let signBtn = document.getElementById("signup");
let signDiv = document.getElementById("signup-form");

logBtn.onclick = () => {
  logDiv.style.left = "0px";
  signDiv.style.left = "450px";
  logBtn.style.backgroundColor = "#2979FF";
  signBtn.style.backgroundColor = "#fff";
  logBtn.style.color = "#fff";
  signBtn.style.color = "#000";
}

signBtn.onclick = () => {
  logDiv.style.left = "450px";
  signDiv.style.left = "0px";
  signBtn.style.backgroundColor = "#2979FF";
  logBtn.style.backgroundColor = "#fff";
  signBtn.style.color = "#fff";
  logBtn.style.color = "#000";
}