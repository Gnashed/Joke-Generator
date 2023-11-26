// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

import getRequest from '../api/promises';
import renderToDOM from '../utils/renderToDOM';

const init = () => {
  // Render Card
  document.querySelector('#app').innerHTML = `
  <div class="card">
    <h1>Joke Generator</h1>
    <div id="joke-setup"></div>
    <div id="punchline"></div>
    <button class="btn btn-danger" id="get-a-joke">Get a Joke</button><br />
  </div>
  `;

  // When buttons are clicked
  document
    .querySelector('#get-a-joke')
    .addEventListener('click', () => {
      // Give the data a name, joke, then grab what you need from the data, which are setup and delivery.
      getRequest().then((jokeData) => {
        renderToDOM('#joke-setup', jokeData.setup);
        renderToDOM('#punchline', jokeData.delivery);
      });
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
