import React from 'react';
import ChatMessages from '../components/chatMessages';
import ChatInput from '../components/chatInput';

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    fetch(`api/messages/${this.props.recipientId}`)
      .then(response => response.json())
      .then(messages => this.setState({ messages: messages }));

  }

  addMessage(newMessage) {
    fetch('api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMessage)
    })
      .then(response => response.json())
      .then(newMessage => this.setState({
        messages: this.state.messages.concat(newMessage)
      }));
  }

  render() {
    const recipientId = this.props.recipientId;
    const messages = this.state.messages;
    const createdAt = this.state.messages.createdAt;
    return (
      <>
        <ChatMessages createdAt={createdAt} messages={messages} recipientId={recipientId} />
        <ChatInput recipientId={recipientId} onSubmit={this.addMessage} />
      </>
    );
  }
}
