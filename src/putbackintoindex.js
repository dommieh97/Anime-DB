// Verify Log In Status
// let myPageLink = document.getElementById("myPageLink");


// window.addEventListener("DOMContentLoaded", function () {
//   if (isLoggedIn()) {
//     myPageLink.href = "register.html";

//     document.getElementById("loginContainer").style.display = "none";
//     document.getElementById("logoutButton").style.display = "block";
//   } else {
//     var myPageLink = document.getElementById("myPageLink");
//     myPageLink.href = "myPage.html";

//     document.getElementById("loginContainer").style.display = "block";
//     document.getElementById("logoutButton").style.display = "none";
//   }
// });

// document.querySelector("#show-login").addEventListener('click', function(){
//   document.querySelector('.popup').classList.add('active')
// });
// document.querySelector(".popup .close-btn").addEventListener('click', function(){
//   document.querySelector('.popup').classList.remove('active')
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

//   fetch("http://localhost:3000/login", {
//     method: "POST",
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
//      closeLoginPopup();

// }
// login();

// function logout() {
//   removeAuthToken();

//   document.getElementById("loginContainer").style.display = "block";
//   document.getElementById("logoutButton").style.display = "none";
// }
// logout();


// const baseURL = "https://api.jikan.moe/v4/anime";
// const wordsURL = "http://localhost:3000/animeUser";
// let matchedIndex = -1;

// async function fetchData(page) {
//   const url = `${baseURL}?page=${page}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function fetchWordsData() {
//   const response = await fetch(wordsURL);
//   const data = await response.json();
//   return data.synopsis;
// }

// async function compareProperties() {
//   const wordsData = await fetchWordsData();
//   const words = wordsData.split(" ");
//   console.log("Words:", words);

//   const properties = {};
//   for (let i = 0; i < words.length; i += 3) {
//     const propertyName = `property${Math.ceil((i + 1) / 3)}`;
//     properties[propertyName] = words.slice(i, i + 3).join(" ");
//   }

//   const firstItem = properties;
//   console.log("First Item:", firstItem);

//   let page = 1;
//   let matchFound = false;

//   while (!matchFound) {
//     const apiData = await fetchData(page);
//     console.log("API Data:", apiData);

//     for (let i = 0; i < apiData.data.length; i++) {
//       const currentItem = {};
//       const item = apiData.data[i];
//       if (item && item.synopsis) {
//         const currentWords = item.synopsis.split(" ");
//         console.log("Current Words:", currentWords);
//         for (let j = 0; j < words.length; j += 3) {
//           const propertyName = `property${Math.ceil((j + 1) / 3)}`;
//           currentItem[propertyName] = currentWords.slice(j, j + 3).join(" ");
//         }
//       }

//       let allPropertiesMatch = true;
//       let atLeastOnePropertyMatch = false;

//       const shuffledProperties = shuffle(Object.keys(firstItem));

//       for (const propertyName of shuffledProperties) {
//         if (firstItem[propertyName] === currentItem[propertyName]) {
//           atLeastOnePropertyMatch = true;
//         } else {
//           allPropertiesMatch = false;
//         }

//         if (atLeastOnePropertyMatch) {
//           break;
//         }
//       }

//       if (allPropertiesMatch) {
//         console.log(`All properties match between first item and item ${i}`);
//         matchFound = true;
//         matchedIndex = i;
//         break;
//       } else if (atLeastOnePropertyMatch) {
//         console.log(
//           `At least one property matches between first item and item ${i}`
//         );
//       } else {
//         console.log(`No properties match between first item and item ${i}`);
//       }
//     }

//     page++;

//     if (page > apiData.last_page) {
//       break;
//     }

//     // Pause for 2000 milliseconds before looping again
//     await delay(2000);
//   }

//   if (matchFound) {
//     console.log("Match found!");
//   } else {
//     console.log("No match found.");
//   }
// }

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const generateButton = document.getElementById("generateAnime");

// generateButton.addEventListener("click", function () {
//   if (matchedIndex !== -1) {
//     popularDetails(apiData, matchedIndex);
//   }
// });

// function shuffle(array) {
//   const shuffledArray = array.slice();
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// }

// compareProperties();