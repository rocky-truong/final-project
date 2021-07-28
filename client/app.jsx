import React from 'react';
import UserList from './pages/search';
import Header from './components/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('api/users', { method: 'GET' })
      .then(response => response.json())
      .then(users => this.setState({
        users
      }));
  }

  render() {
    return (
      <>
      <Header />
      <div>
        <UserList users={this.state.users} />
      </div>
      </>
    );
  }
}
