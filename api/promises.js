// When the user presses the "Get a Joke" button, an API call is made to the joke API and the joke setup appears on the DOM.

const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

// GET Joke
const getRequest = () => new Promise((resolve, reject) => {
  // We're requesting the joke API here. fetch() is sending off an HTTP request
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: { // additional info on the type of request we're making
      'Content-Type': 'application/json',
    },
  })
  // wait and then do something.
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getRequest;
