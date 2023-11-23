// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// Importing components
import jokeCard from '../components/jokeCard';
import domEvents from '../events/domEvents';

// Importing utils
// import renderToDOM from '../utils/renderToDOM';

const init = () => {
  // Renders joke card to DOM
  jokeCard();
  console.warn('YOU ARE UP AND RUNNING!');
  domEvents();
  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
