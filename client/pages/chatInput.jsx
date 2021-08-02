import React from 'react';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newMessage = {
      message: this.state.text
    };
    this.props.onSubmit(newMessage);
    this.setState({ text: '' });
  }

  render() {
    return (
      <>
        <form className="message-input" onSubmit={this.handleSubmit}>
          <input type="text" name="text" id="text" value={this.state.text}
            placeholder="Type a message..." onChange={this.handleChange}
            required className="text-input" />
          <button className="button-send" type="submit">
            <i className="fas fa-paper-plane fa-2x"></i>
          </button>
        </form>
      </>
    );
  }
}
