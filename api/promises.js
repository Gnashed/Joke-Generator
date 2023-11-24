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
    .then((response) => {
      // console.warn('response', response);
      response.json(); // We can't use the .json data w/o unpacking it.
    })
    .then((data) => {
      resolve(data.setup); // Taking the data so it cn be usable JS.
      // console.warn('resolved data', data);
    })
    .catch(reject); // If we get an error, it'll catch() it and reject it, preventing
  // your website from breaking, unless your website depended on the data.
});

export default getRequest;
