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
let genreButton;
let genreBtn;

fetch('https://api.jikan.moe/v4/genres/manga')
  .then(response => response.json())
  .then(data => {
    const genreData = data.data;
    if (genreData && genreData.length > 0) {
      createGenreButtons(genreData);
    } else {
      console.error('Error: Genre data is empty or undefined');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

function createGenreButtons(genreData) {
  const genreSpace = document.getElementById("genreSpace");
  const genreSubSpace = document.getElementById("genreSubSpace");

  if (Array.isArray(genreData) && genreData.length > 0) {
    const genreSlice = genreData.slice(0, 18);

    genreSlice.forEach((genre) => {
      const genreBtn = document.createElement("button");
      genreBtn.textContent = genre.name;
      genreBtn.id = genre.name;
      genreBtn.className = "animeBtn zoom-out zoom-out--red";

      genreBtn.addEventListener("click", () => {
        if (genre.name === "Avant Garde") {
          const genreButtons = document.querySelectorAll("#genreSpace button");
          genreButtons.forEach(button => {
            button.style.display = "none";
          });
          const selectedGenres = [0, 1, 5, 7, 10, 13, 14, 15];

          

          selectedGenres.forEach(index => {
            const selectedGenre = genreData[index];
            const genreButton = document.createElement("button");
            genreButton.textContent = selectedGenre.name;
            genreButton.className = "animeBtn zoom-out zoom-out--red";
            genreButton.id = selectedGenre.name.replace(/\s+/g, '-').toLowerCase();
            genreButton.addEventListener("click", () => {
              if (genreButton.id === "sports") {
                  genreSubSpace.innerHTML = '';

                const mangaInfoSheet = document.getElementById('mangaInfoSheet');
                const detailDiv = document.createElement("div");
                detailDiv.id = "popular-Detail";
                detailDiv.innerHTML = `
                  <h3 class="name">Name Here</h3>
                  <h2 class="engName">Name Here</h2>
                  <img class="popular-image" src="https://media4.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif" />
                  <h3>Duration</h3>
                  <p id="release-year"></p>
                  <h3>Rating</h3>
                  <p>
                    <span id="rating-display"></span>
                  </p>
                  <h3>Description:</h3>
                  <p id="description"></p>
                  <h3>Genres:</h3>
                  <p id="genres"></p>
                `;
                mangaInfoSheet.appendChild(detailDiv);

                fetch('https://api.jikan.moe/v4/manga?q=Super Biking: Miyaya Kazuhiko Jisenshuu&sfw')
                  .then(response => response.json())
                  .then(api => {
                    popularDetails(api, 0);
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  });
                 
                  
                  const newSportsButton = document.createElement("button");
                  newSportsButton.textContent = "Sports";
                  newSportsButton.className = "animeBtn zoom-out zoom-out--red";
                  newSportsButton.id = "Sports2";
                  genreSubSpace.appendChild(newSportsButton);

              }
            });
            genreSubSpace.appendChild(genreButton);

          
          });
        }

        

      
        const newAvantGardeButton = document.createElement("button");
        newAvantGardeButton.textContent = "Avant Garde";
        newAvantGardeButton.className = "animeBtn zoom-out zoom-out--red";
        genreSpace.appendChild(newAvantGardeButton);
      });

      genreSpace.appendChild(genreBtn);
    });
  }
}

function createGenreBtn() {
  const genreTitle = document.getElementById('genreTitle');
  const genreBtn = document.createElement('button');

  genreBtn.textContent = "Genre";
  genreBtn.className = "animeBtn zoom-out zoom-out--red";

  genreTitle.appendChild(genreBtn);
}

function popularDetails(api, index) {
  const current = api.data[index];

  const rating = document.getElementById('rating-display');
  const description = document.getElementById('description');
  const genres = document.getElementById('genres');
  const name = document.querySelector('h3.name');
  const engName = document.querySelector('h2.engName');
  const image = document.querySelector('img.popular-image');
  const releaseYear = document.getElementById('release-year');

  image.height = '600';
  image.width = '450';
  image.src = current.images.jpg.image_url;
  rating.textContent = current.score;
  description.textContent = current.synopsis;
  name.textContent = current.titles[0].title;
  engName.textContent = current.titles[1].title;
  releaseYear.textContent = current.published.string;
  genres.textContent = current.genres[0].name;
  if (current.genres[1].name !== undefined) genres.textContent += ('/' + current.genres[1].name);
}

createGenreBtn();

// html elements only
const items = document.querySelectorAll(".item");
const active = document.querySelector(".active");

(function reset() {
  active.style.left = `${items[2].offsetLeft}px`;
})();

items.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    active.style.left = `${elem.offsetLeft}px`;
  });
});

// login functionality

document.querySelector("#show-login").addEventListener('click', function(){
  document.querySelector('.popup').classList.add('active')
});
document.querySelector(".popup .close-btn").addEventListener('click', function(){
  document.querySelector('.popup').classList.remove('active')
});






















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
