import renderToDOM from '../utils/renderToDOM';

const jokeCard = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
    <h1>Joke Generator</h1>
    <small>You are going to laugh!</small><br />
    <button class="btn btn-danger" id="click-me">Get a Joke</button><br />
  </div>`;

  renderToDOM('#app', domString);
};

export default jokeCard;
