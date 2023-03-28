let hidden = document.querySelector(".hidden");

let email = document.querySelector(".email");
let emailBtn = document.getElementById("email-button");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log(hidden, emailBtn, regex, email);

emailBtn.addEventListener("click", function valdEmail() {
  let emailAddress = document.getElementById("emailId").value;
  let result = regex.test(emailAddress);
  console.log(emailAddress);

  if (result === false) {
    alert("Please input correct email address.");
  } else {
    console.log(result, email);
    hidden.classList.remove("hidden");
    email.classList.add("hidden");
  }
  // console.log(result, email);
});

let xemBtn = document.querySelectorAll(".button");
console.log(xemBtn);

function change(el) {
  if (el.value === "Xem") el.value = "Đóng";
  else el.value = "Xem";
}
