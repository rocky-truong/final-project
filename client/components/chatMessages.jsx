import React from 'react';
import { intlFormat } from 'date-fns';

export default class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [this.props.messages]
    };
  }

  // componentDidMount() {
  //   fetch(`/api/messages/${this.props.recipientId}`)
  //     .then(response => response.json())
  //     .then(messages => this.setState({ messages }));
  // }

  render() {
    const messages = this.state.messages;
    let recipientId = this.props.recipientId;
    if (recipientId === '1') {
      recipientId = 'Austin';
    }
    if (recipientId === '2') {
      recipientId = 'Ben';
    }
    if (recipientId === '3') {
      recipientId = 'Vincent';
    }
    if (messages.length >= 1) {
      return (
      <>
      <div className="container">
        <h2 className="page-header">Chat with {messages[0].recipientName}</h2>
        <div>
          {
            messages.map(message => {
              return (
              <Message
              key={recipientId}
              message={message} />
              );
            })
        }
        </div>
      </div>
      </>
      );
    } else {
      return (
        <>
          <div className="container">
            <h2 className="page-header">Chat with {recipientId}</h2>
          </div>
        </>
      );
    }
  }
}

function Message(props) {
  const { message, createdAt } = props.message;
  return (
    <>
    <div className="message-display">
      <div className="timestamp">
        { intlFormat(new Date(createdAt), { hour: '2-digit', minute: '2-digit', hour12: 'true' }) }
      </div>
      <div className="message">
        { message }
      </div>
    </div>
    </>
  );
}
