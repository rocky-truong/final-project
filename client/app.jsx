import React from 'react';
import UserList from './pages/search';
import Header from './components/header';
// import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
      // route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    fetch('api/users', { method: 'GET' })
      .then(response => response.json())
      .then(users => this.setState({
        users
      }));
  }

  renderPage() {
    return (
      <UserList users={this.state.users} />
    );
  }

  render() {
    return (
      <>
      <Header />
      { this.renderPage() }
      </>
    );
  }
}
