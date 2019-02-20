// Note: we can do this because we're using webpack on all of our code, including our server.
import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Use our public client files.
app.use(express.static('public'));


app.get('/', (req, res) => {
  console.log('First, let us render the server');
  res.send(renderer());
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
