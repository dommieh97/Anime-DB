// Verify Log In Status
window.addEventListener("DOMContentLoaded", function () {
  if (isLoggedIn()) {
    var myPageLink = document.getElementById("myPageLink");
    myPageLink.href = "register.html";

    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("logoutButton").style.display = "block";
  } else {
    var myPageLink = document.getElementById("myPageLink");
    myPageLink.href = "myPage.html";

    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("logoutButton").style.display = "none";
  }
});

// Add Code Here

let anime;
let isAnime
function flipRandom() 
{
  let isAnime = localStorage.getItem('isAnime') === 'true';

  isAnime = !isAnime;

  if (isAnime) 
  {
    fetch('https://api.jikan.moe/v4/random/anime')
      .then(resp => resp.json())
      .then(api => {
        randomDetails(api.data);
      })
      .catch(error => console.error(error));
  } 
  else 
  {
    fetch('https://api.jikan.moe/v4/random/manga')
      .then(resp => resp.json())
      .then(api => {
        randomDetails(api.data);
      })
      .catch(error => console.error(error));
  }

  localStorage.setItem('isAnime', isAnime.toString());
}

function randomDetails(api) {


  console.log(api);
  anime = api;
  const rating = document.getElementById('rating-display');
  const description = document.getElementById('description');
  const genres = document.getElementById('genres');
  const name = document.querySelector('h3.name');
  const engName = document.querySelector('h2.engName');
  const image = document.querySelector('img.popular-image');
  const releaseYear = document.getElementById('release-year')


  image.height = '600';
  image.width = '450';
  rating.textContent = anime.score;
  description.textContent = anime.synopsis;
  image.src = anime.images.jpg.image_url;
  name.textContent = anime.titles[0].title;
  engName.textContent = anime.titles[1].title;
  genres.textContent = anime.genres[0].name;
  genres.textContent += '/' + anime.genres[1].name;
  if(isAnime = true) releaseYear.textContent = anime.aired.string
   else releaseYear.textContent = anime.published.string

}




flipRandom();


// html elements only
const items = document.querySelectorAll(".item");
const active = document.querySelector(".active");

(function reset() {
  active.style.left = `${items[3].offsetLeft}px`;
})();

items.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    active.style.left = `${elem.offsetLeft}px`;
  });
});

// login functionality
function isLoggedIn() {
  const token = localStorage.getItem("token");
  return !!token;
}

function setAuthToken(token) {
  localStorage.setItem("token", token);
}

function removeAuthToken() {
  localStorage.removeItem("token");
}

function openLoginPopup() {
  document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {
  document.getElementById("loginPopup").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        setAuthToken(data.token);

        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("logoutButton").style.display = "block";
      } else {
        console.error("Authentication failed");
      }
    })
    .catch((error) => {
      console.error("Error occurred during login:", error);
    }); 
     closeLoginPopup();

}
login();

function logout() {
  removeAuthToken();

  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("logoutButton").style.display = "none";
}
logout();
