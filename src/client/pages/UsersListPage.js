import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }

  render() {
    return(
      <div>
        Here is a list of users
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData() {
  console.log('Loading some data in the load function!!!');
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
}
