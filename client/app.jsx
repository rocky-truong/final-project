import React from 'react';
import SearchList from './pages/search';
import Header from './components/header';
import Chat from './pages/chat';
import ChatInput from './pages/chatInput';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', hashRoute => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  addMessage(newMessage) {
    fetch('api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMessage)
    })
      .then(response => response.json());
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
          <Chat recipientId={recipientId} />
          <ChatInput recipientId={recipientId} onSubmit={this.addMessage} />
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
