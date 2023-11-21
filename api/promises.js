// When the user presses the "Get a Joke" button, an API call is made to the joke API and the joke setup appears on the DOM.

const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

// GET Joke
const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getRequest;
