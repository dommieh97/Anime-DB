// Add Code Here

let span = document.getElementById('navBar');
let navElements = document.getElementsByClassName("navElements");



(async () => {
  try {
    const animeResponse = await fetch('https://api.jikan.moe/v4/top/anime');
    const animeData = await animeResponse.json();
    showPopularAnimeNav(animeData);
    popularDetails(animeData, 0);

    const mangaResponse = await fetch('https://api.jikan.moe/v4/top/manga');
    const mangaData = await mangaResponse.json();
    showPopularMangaNav(mangaData);
    popularDetails(mangaData, 0);
  } catch (error) {
    console.error('Error occurred during fetch requests:', error);
  }
})();

function showPopularAnimeNav(api)

{

  for (let i = 0; i < 5; i++) 
    {
    const popularAnimeNav = document.getElementById('popularAnimeNav')
    const animeDisplay = document.createElement("img");
    animeDisplay.height = '275'
    animeDisplay.width = '225'
    animeDisplay.src = api.data[i].images.jpg.image_url;
    
   
  
    popularAnimeNav.append(animeDisplay)
popularAnimeNav.addEventListener('click', (e) => 
{
  const clickedIndex = Array.from(popularAnimeNav.children).indexOf(e.target);
  popularDetails(api, clickedIndex);

  
})}};

function showPopularMangaNav(api)
{

  for (let i = 0; i < 5; i++) 
  {
    const popularMangaNav = document.getElementById('popularMangaNav')
    const mangaDisplay = document.createElement("img");
    mangaDisplay.height = '275'
    mangaDisplay.width = '225'

    mangaDisplay.src = api.data[i].images.jpg.image_url;
   
    popularMangaNav.appendChild(mangaDisplay);
    }
   
    popularMangaNav.addEventListener('click', (e) => 
    {
      const clickedIndex = Array.from(popularMangaNav.children).indexOf(e.target);
      popularDetails(api, clickedIndex);
    
      
    })};
  

function popularDetails(api,index)
{  

  const current = api.data[index];

  const rating = document.getElementById('rating-display')
  const description = document.getElementById('description')
  const genres = document.getElementById('genres')
  const name = document.querySelector('h3.name')
  const engName = document.querySelector('h2.engName')
  const image = document.querySelector('img.popular-image')
  const releaseYear = document.getElementById('release-year')


  console.log(current)

  image.height = '600'
  image.width = '450'
  image.src = current.images.jpg.image_url
  rating.textContent = current.score
  description.textContent = current.synopsis
  name.textContent = current.titles[0].title
  engName.textContent = current.titles[1].title
  releaseYear.textContent = current.aired.string
   if (current.aired.string == undefined)releaseYear.textContent = current.published.string
  genres.textContent = current.genres[0].name
  if (current.genres[1].name !== undefined) genres.textContent += ('/' + current.genres[1].name) 
 

};

function mangaSubmit() {
  const mangaSubmissions = document.getElementById('mangaSubmissions');
  mangaSubmissions.addEventListener('submit', (e) => {
    e.preventDefault();

    const mangaInput = document.getElementById('mangaInput').value;

    fetch(`https://api.jikan.moe/v4/manga?q=${mangaInput}&sfw`)
      .then(resp => resp.json())
      .then(api => {
        if (api && api.data && api.data.length > 0) {
          showCurrentNav(api);

const postData = {
            image: api.data[0].images.jpg.image_url,
            rating: api.data[0].score,
            description: api.data[0].synopsis,
            genres: api.data[0].genres.map(genre => genre.name),
            name: api.data[0].titles[0].title,
            engName: api.data[0].titles[1].title,
            releaseYear: api.data[0].published.string
          };


          fetch('http://localhost:3000/mangaUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          })
            .then(response => {
            })
            .catch(error => {
              console.error('Error occurred during the post request:', error);
            });
        } else {
          console.log('No valid API data found.');
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });

    mangaSubmissions.reset();
  });
}
    


function animeSubmit() 
{
  const animeSubmission = document.getElementById("animeSubmission");
  animeSubmission.addEventListener('submit', (e) => 
  {
    e.preventDefault();
    const animeInput = document.getElementById("animeInput").value;

    fetch(`https://api.jikan.moe/v4/anime?q=${animeInput}&sfw`)
  .then(resp => resp.json())
  .then(api => {
    if (api && api.data && api.data.length > 0) 
    {
      showCurrentNav(api);
      const postData = {
        image: api.data[0].images.jpg.image_url,
        rating: api.data[0].score,
        description: api.data[0].synopsis,
        genres: api.data[0].genres.map(genre => genre.name),
        name: api.data[0].titles[0].title,
        engName: api.data[0].titles[1].title,
        releaseYear: api.data[0].aired.string
      };


      fetch('http://localhost:3000/animeUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => {
        })
        .catch(error => {
          console.error('Error occurred during the post request:', error);
        });
    } 
  
    else 
    {
      console.log('No valid API data found.');
    }
  })
  .catch(error => 
    {
    console.log('Error:', error);
    });
    animeSubmission.reset();
  });
}
animeSubmit();
mangaSubmit();
function showCurrentNav(api) 
{

  const currentNav = document.getElementById('currentNav');

  const currentDisplay = document.createElement("img");
  currentDisplay.height = '275';
  currentDisplay.width = '225';
  currentDisplay.src = api.data[0].images.jpg.image_url;
 
   
  
  currentNav.appendChild(currentDisplay);

  if (api.data && Array.isArray(api.data) && api.data.length > 0) {
    console.log('API Data:', api.data);
     console.log('API Data - First Item:', api[0]);

    currentDisplay.addEventListener('click', (e) => 
    {
      popularDetails(api, 0);
    })
  } 
  
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') 
    {
      const sound = document.getElementById('wow');
      sound.play();
    }})
  
  // html elements only
const items = document.querySelectorAll(".item");
const active = document.querySelector(".active");

(function reset() {
  active.style.left = `${items[0].offsetLeft}px`;
})();

items.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    active.style.left = `${elem.offsetLeft}px`;
  });
});







