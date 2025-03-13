const submitBtn = document.querySelector('#submit')
const genreInput = document.querySelector('#genre')
const nameInput = document.querySelector('#name')

submitBtn.addEventListener('click', () => {
  genreInput.innerHTML = '';
  nameInput.innerHTML = '';
})

