// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

import getRequest from '../api/promises';
import renderToDOM from '../utils/renderToDOM';

const init = () => {
  // Render Card
  document.querySelector('#app').innerHTML = `
  <div class="card" style="width: 18rem;">
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
      getRequest().then((joke) => {
        renderToDOM('#joke-setup', joke.setup);
        renderToDOM('#punchline', joke.delivery);
      });
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
