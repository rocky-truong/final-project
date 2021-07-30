import React from 'react';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null
    };
  }

  componentDidMount() {
    fetch('/api/messages/1')
      .then(response => response.json())
      .then(messages => this.setState({ messages }));
  }

  render() {
    if (!this.state.messages) return null;
    const { message, createdAt, senderId, recipientId } = this.state.messages;
    console.log(message);
    return (
      <>
      <div>testing</div>
      <div>{message}</div>
      </>
    );
  }
}
