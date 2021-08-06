import React from 'react';
import SearchList from './pages/search';
import Header from './components/header';
import ChatPage from './pages/chatPage';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', hashRoute => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <SearchList />;
    }
    if (route.path === 'chats') {
      const recipientId = route.params.get('recipientId');
      return (
        <>
          <ChatPage recipientId={recipientId} />
        </>
      );
    }

    return <SearchList />;
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
