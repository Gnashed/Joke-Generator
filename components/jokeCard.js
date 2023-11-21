import renderToDOM from '../utils/renderToDOM';

const jokeCard = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
    <h1>Joke Generator</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Get a Joke</button><br />
    <hr />
  </div>`;

  renderToDOM('#app', domString);
};

export default jokeCard;
