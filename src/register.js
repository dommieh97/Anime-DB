// // Verify Log In Status
// let myPageLink = document.getElementById("myPageLink");

// ;
// window.addEventListener("DOMContentLoaded", function () {
//   if (isLoggedIn()) {
//     myPageLink.href = "register.html";
//     document.getElementById("loginContainer").style.display = "none";
//     document.getElementById("logoutButton").style.display = "block";
//   } else {
//     myPageLink.href = "myPage.html";
//     document.getElementById("loginContainer").style.display = "block";
//     document.getElementById("logoutButton").style.display = "none";
//   }
// });

// Add Code Here

// function createUser() {
//   var username = document.getElementById("usernameInput").value;
//   var password = document.getElementById("passwordInput").value;

//   var newUser = {
//     username: username,
//     password: password,
//   };

//   fetch('http://localhost:3000/users', {
//     method: 'POST',
//     mode: 'cors',
//     body: JSON.stringify(newUser),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('User created:', data);
//       window.location.href = "register.html";
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// function signIn() {
//   var username = document.getElementById("usernameInput").value;
//   var password = document.getElementById("passwordInput").value;

//   fetch('http://localhost:3000/users', { mode: 'cors' })
//     .then(response => response.json())
//     .then(users => {
//       var foundUser = users.find(user => user.username === username && user.password === password);
//       if (foundUser) {
//         console.log('User signed in:', foundUser);
//         window.location.href = "register.html";
//       } else {
//         console.log('Invalid username or password');
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// // html elements only
// const items = document.querySelectorAll(".item");
// const active = document.querySelector(".active");

// (function reset() {
//   active.style.left = `${items[4].offsetLeft}px`;
// })();

// items.forEach((elem) => {
//   elem.addEventListener("click", (e) => {
//     active.style.left = `${elem.offsetLeft}px`;
//   });
// });

// // login functionality
// function isLoggedIn() {
//   const token = localStorage.getItem("token");
//   return !!token;
// }

// function setAuthToken(token) {
//   localStorage.setItem("token", token);
// }

// function removeAuthToken() {
//   localStorage.removeItem("token");
// }

// function openLoginPopup() {
//   document.getElementById("loginPopup").style.display = "block";
// }

// function closeLoginPopup() {
//   document.getElementById("loginPopup").style.display = "none";
// }

// function login() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   fetch('http://localhost:3000/login', {
//     method: "POST",
//     mode: 'cors',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.token) {
//         setAuthToken(data.token);
//         document.getElementById("loginContainer").style.display = "none";
//         document.getElementById("logoutButton").style.display = "block";
//       } else {
//         console.error("Authentication failed");
//       }
//     })
//     .catch((error) => {
//       console.error("Error occurred during login:", error);
//     });
//   closeLoginPopup();
// }

// function logout() {
//   removeAuthToken();
//   document.getElementById("loginContainer").style.display = "block";
//   document.getElementById("logoutButton").style.display = "none";
// }
