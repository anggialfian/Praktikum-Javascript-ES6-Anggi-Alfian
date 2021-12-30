function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "anggi" && password == "0110221042") {
    window.open("./secpage.html")
  } else {
    alert(`Account Not Found`);
  }
}