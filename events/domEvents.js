import jokeSetup from '../components/jokeSetup';

const domEvents = () => {
  document
    .querySelector('#click-me')
    .addEventListener('click', () => {
      // console.warn('You clicked that button!');
      jokeSetup();
    });
};

export default domEvents;
