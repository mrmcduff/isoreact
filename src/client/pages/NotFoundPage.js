import React from 'react';

// Static context is only passed when using StaticRouter, not BrowserRouter
const NotFoundPage = ({ staticContext = {}}) => {
  staticContext.notFound = true;
  return <h1>Oops, route not found.</h1>;
};

export default {
  component: NotFoundPage,
}
