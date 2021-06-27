let logBtn = document.getElementById("login");
let logDiv = document.getElementById("login-form");
let signBtn = document.getElementById("signup");
let signDiv = document.getElementById("signup-form");

logBtn.onclick = () => {
  logDiv.style.left = "0px";
  signDiv.style.left = "450px";
  logBtn.style.backgroundColor = "#fff";
  signBtn.style.backgroundColor = "#2979FF";
  logBtn.style.color = "#000";
  signBtn.style.color = "#fff";
}

signBtn.onclick = () => {
  logDiv.style.left = "450px";
  signDiv.style.left = "0px";
  signBtn.style.backgroundColor = "#fff";
  logBtn.style.backgroundColor = "#2979FF";
  signBtn.style.color = "#000";
  logBtn.style.color = "#fff";
}