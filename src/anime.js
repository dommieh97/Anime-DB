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
function createGenreButtons(genreData) {
  const genreSpace = document.getElementById("genreSpace");

  const genreSlice = genreData.slice(0, 18); // Get the first 18 entries from the genre data

  genreSlice.forEach((genre) => {
    const genreBtn = document.createElement("button");
    genreBtn.textContent = genre.name;
    genreBtn.id = genre.name; // Set the button ID to genre name
    genreBtn.className = "animeBtn zoom-out zoom-out--red";

    genreSpace.appendChild(genreBtn);
  });
}

async function interactAnime() {
  const movieBtn = document.getElementById('movieBtn');

  movieBtn.addEventListener('click', async () => {
    const response = await fetch('https://api.jikan.moe/v4/genres/anime');
    const data = await response.json();

    const genreData = data.data;

    const seriesBtn = document.getElementById('seriesBtn');
    seriesBtn.style.display = "none";
    movieBtn.style.display = "none";

    createMoviesButton();
    createGenreButtons(genreData);
    createGenreBtn();

  });
}

interactAnime();

async function interactSeries() {
  const seriesBtn = document.getElementById('seriesBtn');

  seriesBtn.addEventListener('click', async () => {
    const response = await fetch('https://api.jikan.moe/v4/genres/anime');
    const data = await response.json();

    const genreData = data.data;

    const movieBtn = document.getElementById('movieBtn');
    seriesBtn.style.display = "none";
    movieBtn.style.display = "none";

    createSeriesButton();
    createGenreButtons(genreData);
    createGenreBtn();

  });
}

interactSeries();


 function createSeriesButton()
 {
  const animeSpace = document.getElementById("series+movie")
   const seriesBtn2 = document.createElement('button')
   seriesBtn2.textContent = 'Series'

   animeSpace.appendChild(seriesBtn2)

   seriesBtn2.className = "animeBtn zoom-out zoom-out--red";

   seriesBtn2.addEventListener('click', function ()
   {
     resetHTML();
     seriesBtn2.remove();
   });
 };

function createMoviesButton()
 {
   const animeSpace = document.getElementById("series+movie");
   const movieBtn2 = document.createElement('button');

   movieBtn2.textContent = 'Movies';

   animeSpace.appendChild(movieBtn2);

   movieBtn2.className = "animeBtn zoom-out zoom-out--red";

   movieBtn2.addEventListener('click', function ()
   {
     resetHTML();
     movieBtn2.remove();
   });
 }

 function createGenreBtn() {

  
 const genreTitle = document.getElementById('genreTitle')
 const genreBtn = document.createElement('button')

 genreBtn.textContent = "Genre"
 genreBtn.className = "animeBtn zoom-out zoom-out--red";

 genreTitle.append(genreBtn)

 };



// function createAdventureButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const adventureBtn2 = document.createElement('button');

//   adventureBtn2.textContent = 'Adventure';

//   genreSpace.appendChild(adventureBtn2);

//   adventureBtn2.className = "animeBtn zoom-out zoom-out--red";

//    adventureBtn2.addEventListener('click', function ()
//    {
//      adventureBtn2.remove();
//      showGenre();
//      removeSubGenre();

//    });
// };

// function createActionButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const actionBtn2 = document.createElement('button');

//   actionBtn2.textContent = 'Action';

//   genreSpace.appendChild(actionBtn2);

//   actionBtn2.className = "animeBtn zoom-out zoom-out--red";


//    actionBtn2.addEventListener('click', function ()
//    {
//      actionBtn2.remove();
//      showGenre();

//    });
// };

// function createComedyButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const comedyBtn2 = document.createElement('button');

//   comedyBtn2.textContent = 'Comedy';

//   genreSpace.appendChild(comedyBtn2);

//   comedyBtn2.className = "animeBtn zoom-out zoom-out--red";


//    comedyBtn2.addEventListener('click', function ()
//    {
//      comedyBtn2.remove();
//      showGenre();

//    });
// };

// function createDramaButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const dramaBtn2 = document.createElement('button');

//   dramaBtn2.textContent = 'Drama';

//   genreSpace.appendChild(dramaBtn2);

//   dramaBtn2.className = "animeBtn zoom-out zoom-out--red";


//    dramaBtn2.addEventListener('click', function ()
//    {
//      dramaBtn2.remove();
//      showGenre();

//    });
// };

// function createFantasyButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const fantasyBtn2 = document.createElement('button');

//   fantasyBtn2.textContent = 'Fantasy';

//   genreSpace.appendChild(fantasyBtn2);

//   fantasyBtn2.className = "animeBtn zoom-out zoom-out--red";


//    fantasyBtn2.addEventListener('click', function ()
//    {
//      fantasyBtn2.remove();
//      showGenre();

//    });
// };

// function createHorrorButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const horrorBtn2 = document.createElement('button');

//   horrorBtn2.textContent = 'Horror';

//   genreSpace.appendChild(horrorBtn2);

//   horrorBtn2.className = "animeBtn zoom-out zoom-out--red";


//    horrorBtn2.addEventListener('click', function ()
//    {
//      horrorBtn2.remove();
//      showGenre();

//    });
// };

// function createRomanceButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const romanceBtn2 = document.createElement('button');

//   romanceBtn2.textContent = 'Romance';

//   genreSpace.appendChild(romanceBtn2);

//   romanceBtn2.className = "animeBtn zoom-out zoom-out--red";


//    romanceBtn2.addEventListener('click', function ()
//    {
//      romanceBtn2.remove();
//      showGenre();

//    });
// };

// function createSciFiButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const scifiBtn2 = document.createElement('button');

//   scifiBtn2.textContent = 'Sci-Fi';

//   genreSpace.appendChild(scifiBtn2);

//   scifiBtn2.className = "animeBtn zoom-out zoom-out--red";


//    scifiBtn2.addEventListener('click', function ()
//    {
//      scifiBtn2.remove();
//      showGenre();

//    });
// };

// function createSportsButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const sportsBtn2 = document.createElement('button');

//   sportsBtn2.textContent = 'Sports';

//   genreSpace.appendChild(sportsBtn2);

//   sportsBtn2.className = "animeBtn zoom-out zoom-out--red";


//    sportsBtn2.addEventListener('click', function ()
//    {
//      sportsBtn2.remove();
//      showGenre();

//    });
// };

// function createSOLButton()
// {
//   const genreSpace = document.getElementById("genreSpace");
//   const sOLBtn2 = document.createElement('button');

//   sOLBtn2.textContent = 'Slice of Life';

//   genreSpace.appendChild(sOLBtn2);

//   sOLBtn2.className = "animeBtn zoom-out zoom-out--red";


//    sOLBtn2.addEventListener('click', function ()
//    {
//      sOLBtn2.remove();
//      showGenre();

//    });
// };

 function resetHTML()
 {
   const genreTitle = document.getElementById('genreTitle');
  const genreSpace = document.getElementById('genreSpace');
   const animeSpace = document.getElementById('series+movie');

   genreTitle.innerHTML = '';
   genreSpace.innerHTML = '';

   const seriesBtn = document.getElementById('seriesBtn');
   const movieBtn = document.getElementById('movieBtn');


  movieBtn.style.display = "initial"
  seriesBtn.style.display = "initial"

 }


// function hideGenre()
// {
//   const actionBtn = document.getElementById("actionBtn")
//   const adventureBtn = document.getElementById("adventureBtn")
//   const comedyBtn = document.getElementById("comedyBtn")
//   const dramaBtn = document.getElementById("dramaBtn")
//   const fantasyBtn = document.getElementById("fantasyBtn")
//   const horrorBtn = document.getElementById("horrorBtn")
//   const romanceBtn = document.getElementById("romanceBtn")
//   const scifiBtn = document.getElementById("scifiBtn")
//   const sOLBtn = document.getElementById("sOLBtn")
//   const sportsBtn = document.getElementById("sportsBtn")

//   actionBtn.style.display = "none"
//   adventureBtn.style.display = "none"
//   comedyBtn.style.display = "none"
//   dramaBtn.style.display = "none"
//   fantasyBtn.style.display = "none"
//   horrorBtn.style.display = "none"
//   romanceBtn.style.display = "none"
//   scifiBtn.style.display = "none"
//   sOLBtn.style.display = "none"
//   sportsBtn.style.display = "none"

// };

// function showGenre()
// {
//   const actionBtn = document.getElementById("actionBtn")
//   const adventureBtn = document.getElementById("adventureBtn")
//   const comedyBtn = document.getElementById("comedyBtn")
//   const dramaBtn = document.getElementById("dramaBtn")
//   const fantasyBtn = document.getElementById("fantasyBtn")
//   const horrorBtn = document.getElementById("horrorBtn")
//   const romanceBtn = document.getElementById("romanceBtn")
//   const scifiBtn = document.getElementById("scifiBtn")
//   const sOLBtn = document.getElementById("sOLBtn")
//   const sportsBtn = document.getElementById("sportsBtn")

//   actionBtn.style.display = "initial"
//   adventureBtn.style.display = "initial"
//   comedyBtn.style.display = "initial"
//   dramaBtn.style.display = "initial"
//   fantasyBtn.style.display = "initial"
//   horrorBtn.style.display = "initial"
//   romanceBtn.style.display = "initial"
//   scifiBtn.style.display = "initial"
//   sOLBtn.style.display = "initial"
//   sportsBtn.style.display = "initial"
// };

// function removeSubGenre()
// {
//   // const actionSubBtn = document.getElementById("actionBtn")
//   const adventureSubBtn = document.getElementById("adventureSubBtn")
//   const comedySubBtn = document.getElementById("comedySubBtn")
//   const dramaSubBtn = document.getElementById("dramaSubBtn")
//   const fantasySubBtn = document.getElementById("fantasySubBtn")
//   const horrorSubBtn = document.getElementById("horrorSubBtn")
//   const romanceSubBtn = document.getElementById("romanceSubBtn")
//   const scifiSubBtn = document.getElementById("scifiSubBtn")
//   // const sOLSubBtn = document.getElementById("sOLSubBtn")
//   const sportsSubBtn = document.getElementById("sportsSubBtn")
//   const historicalSubBtn = document.getElementById("historicalSubBtn")
//   const martialArtsSubBtn = document.getElementById("martialArtsSubBtn")
//   const vampireSubBtn = document.getElementById("vampireSubBtn")
//   const mysterySubBtn = document.getElementById("mysterySubBtn")
//   const supernaturalSubBtn = document.getElementById("supernaturalSubBtn")
//   const crimeSubBtn = document.getElementById("crimeSubBtn")


//   // actionSubBtn.remove()
//   adventureSubBtn.remove()
//   comedySubBtn.remove()
//   dramaSubBtn.remove()
//   fantasySubBtn.remove()
//   horrorSubBtn.remove()
//   romanceSubBtn.remove()
//   scifiSubBtn.remove()
//   // sOLSubBtn.remove()
//   sportsSubBtn.remove()
//   historicalSubBtn.remove()
//   martialArtsSubBtn.remove()
//   vampireSubBtn.remove()
//   mysterySubBtn.remove()
//   supernaturalSubBtn.remove()
//   crimeSubBtn.remove()

// };
// function createSubAction()
// {
//     const genreSubSpace = document.getElementById('genreSubSpace')
//     const comedySubBtn = document.createElement("button")
//     const adventureSubBtn = document.createElement("button")
//     const fantasySubBtn = document.createElement("button")
//     const dramaSubBtn = document.createElement("button")
//     const historicalSubBtn = document.createElement("button")
//     const martialArtsSubBtn = document.createElement("button")
//     const romanceSubBtn = document.createElement("button")
//     const scifiSubBtn = document.createElement("button")
//     const vampireSubBtn = document.createElement("button")
//     const sportsSubBtn = document.createElement("button")
//     const horrorSubBtn = document.createElement("button")
//     const mysterySubBtn = document.createElement("button")
//     const supernaturalSubBtn = document.createElement("button")
//     const crimeSubBtn = document.createElement('button')




//     comedySubBtn.setAttribute('id','comedySubBtn');
//     adventureSubBtn.setAttribute('id','adventureSubBtn');
//     fantasySubBtn.setAttribute('id','fantasySubBtn');
//     dramaSubBtn.setAttribute('id','dramaSubBtn');
//     historicalSubBtn.setAttribute('id','historicalSubBtn');
//     martialArtsSubBtn.setAttribute('id','martialArtsSubBtn');
//     romanceSubBtn.setAttribute('id','romanceSubBtn');
//     scifiSubBtn.setAttribute('id','scifiSubBtn');
//     vampireSubBtn.setAttribute('id','vampireSubBtn');
//     sportsSubBtn.setAttribute('id','sportsSubBtn');
//     horrorSubBtn.setAttribute('id','horrorSubBtn');
//     mysterySubBtn.setAttribute('id','mysterySubBtn');
//     supernaturalSubBtn.setAttribute('id','supernaturalSubBtn');
//     crimeSubBtn.setAttribute('id','crimeSubBtn');


//     comedySubBtn.textContent = 'Comedy'
//     adventureSubBtn.textContent = 'Adventure'
//     martialArtsSubBtn.textContent = 'Martial Arts'
//     dramaSubBtn.textContent = 'Drama'
//     fantasySubBtn.textContent = 'Fantasy'
//     historicalSubBtn.textContent = 'Historical'
//     horrorSubBtn.textContent = 'Horror'
//     scifiSubBtn.textContent = 'Sci-Fi'
//     sportsSubBtn.textContent = 'Sports'
//     romanceSubBtn.textContent = 'Romance'
//     crimeSubBtn.textContent = 'Crime'
//     mysterySubBtn.textContent = 'Mystery'
//     vampireSubBtn.textContent = 'Vampire'
//     supernaturalSubBtn.textContent = 'Supernatural'


//     genreSubSpace.append(adventureSubBtn, comedySubBtn, crimeSubBtn,dramaSubBtn,fantasySubBtn,historicalSubBtn,horrorSubBtn,martialArtsSubBtn,mysterySubBtn,romanceSubBtn,scifiSubBtn,sportsSubBtn,vampireSubBtn,supernaturalSubBtn)

//     martialArtsSubBtn.className = "genreBtn zoom-out zoom-out--red";
//     actionBtn.className = "animeBtn zoom-out zoom-out--red";
//     adventureSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     comedySubBtn.className = "animeBtn zoom-out zoom-out--red";
//     dramaSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     fantasySubBtn.className = "animeBtn zoom-out zoom-out--red";
//     historicalSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     horrorSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     scifiSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     sportsSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     romanceSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     crimeSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     mysterySubBtn.className = "animeBtn zoom-out zoom-out--red";
//     vampireSubBtn.className = "animeBtn zoom-out zoom-out--red";
//     supernaturalSubBtn.className = "animeBtn zoom-out zoom-out--red";


// };

// html elements only
const items = document.querySelectorAll(".item");
const active = document.querySelector(".active");

(function reset() {
  active.style.left = `${items[1].offsetLeft}px`;
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

document.querySelector("#show-login").addEventListener('click', function(){
  document.querySelector('.popup').classList.add('active')
});
document.querySelector(".popup .close-btn").addEventListener('click', function(){
  document.querySelector('.popup').classList.remove('active')
});