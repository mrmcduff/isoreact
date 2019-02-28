import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends React.Component {
    render() {
      switch(this.props.auth) {
        case false:
          // Redirect won't work by itself with the StaticRouter on the server
          // it causes the static router to add something to our context.
          return <Redirect to="/" />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }
  return connect(mapStateToProps)(RequireAuth);
};
