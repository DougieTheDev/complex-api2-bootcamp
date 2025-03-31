const jokeButton = document.getElementById('getJoke');
const jokeContainer = document.getElementById('jokeContainer');
const dogImageContainer = document.getElementById('dogImageContainer');

// api urls
const apiOne = 'https://icanhazdadjoke.com/';
const apiTwo = 'https://dog.ceo/api/breed/shiba/images/random';

// fetch joke from icanhazdadjoke api
const fetchJoke = () => {
    fetch(apiOne, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const joke = data.joke;
        displayJoke(joke);
        fetchDogImage();
    })
    .catch(error => console.error('Error fetching joke:', error));
};

// display the joke on the page
const displayJoke = (joke) => {
    jokeContainer.innerHTML = `<p>${joke}</p>`;
    jokeContainer.style.display = 'block';  // Show joke
};

// fetch a random dog image
const fetchDogImage = () => {
    fetch(apiTwo)
        .then(response => response.json())
        .then(data => {
            const dogImageUrl = data.message;
            displayDogImage(dogImageUrl);
        })
        .catch(error => console.error('Error fetching dog image:', error));
};

// display image on page
const displayDogImage = (imageUrl) => {
    dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
    dogImageContainer.style.display = 'block';  // Show image
};

// event listener button click
jokeButton.addEventListener('click', fetchJoke);
