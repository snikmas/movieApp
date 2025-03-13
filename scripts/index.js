const submitBtn = document.querySelector('#submit')
const movieImg = document.querySelector('#movieImg')
const input = document.querySelector('#search')

const moviesList = [];

moviesList.forEach(movieLi => {
  const movieName = document.querySelector('spanMovie').innerText;
  
  moviesList.insert(movieName);
})

console.log(moviesList)

async function movieInfo(movieName) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + TOKEN_API
    }
  };

  fetch(API_URL, options)
    .then(res => res.json())
    .then(json => console.log(json)) // we will get an array
    .catch(err => console.error(err));
  
}
