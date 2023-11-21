// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// Importing utils
import renderToDOM from '../utils/renderToDOM';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div class="card" style="width: 18rem;">
    <h1>Joke Generator</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Get a Joke</button><br />
    <hr />
  </div>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
