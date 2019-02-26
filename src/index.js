// Note: we can do this because we're using webpack on all of our code, including our server.
// We need to import babel-polyfill in order to use async/await syntax without regeneratorRuntime not defined error.
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
// Use our public client files.
app.use(express.static('public'));
// app.use(
//   "/api",
//   proxy("http://react-ssr-api.herokuapp.com", {
//     poxyReqOptDecorator(opts) {
//       opts.headers["x-forwarded-host"] = "localhost:3000";
//       return opts;
//     }
//   })
// );

app.get('*', (req, res) => {
  const store = createStore(req);
  // Some logic to initialize and load data into the store
  matchRoutes(Routes, req.path).map(( { route }) => {
    return route.loadData ? route.loadData() : null;
  });
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
