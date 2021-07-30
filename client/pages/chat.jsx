import React from 'react';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    fetch(`/api/messages/${this.props.recipientId}`)
      .then(response => response.json())
      .then(messages => this.setState({ messages }));
  }

  render() {
    const messages = this.state.messages;
    if (messages.length >= 1) {
      return (
      <>
      <div className="container">
        <h2 className="page-header">Chat with {this.props.recipientId}</h2>
        <div>
          {
            messages.map(message => {
              return (
              <Message
              key={message.messageId}
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
            <h2 className="page-header">Chat with {this.props.recipientId}</h2>
          </div>
        </>
      );
    }
  }
}

function Message(props) {
  const { message } = props.message;
  return (
    <div>
      { message }
    </div>
  );
}
