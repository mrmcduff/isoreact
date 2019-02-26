import React from 'react';

const Home = (props) => {

  const originString = props.isClient ? 'server' : 'client';
  const divStyle = {
    'backgroundColor' : 'orangered',
    'color': 'white',
  }
  const displayString = `I\'m the EVEN BETTER home component: ${originString}`
  return (
    <div>
      <div style={divStyle}>{displayString}</div>
      <button onClick={() => {console.log('I was clicked')}}>Click me!</button>
    </div>
  );
};

export default { component: Home };
