import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  console.log(`The routes look like: ${JSON.stringify(route)}`);
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

function loadData( store ) {
  console.log(`The store looks like: ${JSON.stringify(store)}`);
}
export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
}