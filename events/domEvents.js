import jokeSetup from '../components/jokeSetup';
import getPunchline from '../components/getPunchline';

const domEvents = () => {
  document
    .querySelector('#get-a-joke')
    .addEventListener('click', () => {
      jokeSetup();
    });

  document
    .querySelector('#joke-setup')// Browser reading as null for some reason. Not sure why.
    .addEventListener('click', () => {
      getPunchline();
    });
};

export default domEvents;
