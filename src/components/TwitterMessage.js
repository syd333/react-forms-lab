import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      remainingChars: this.props.maxChars,
      message: ''
    };
  }

  handleMessageChange = event => {
    this.setState({
      remainingChars: this.props.maxChars - event.target.value.length,
      message: event.target.value
    })
  }

  remainingChars = () => {
    //take this.props.maxchars and minus the this.state.message 
    //then render it in div 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message"
        onChange= {event => 
        this.handleMessageChange(event)}
        value = {this.state.message}
        />
        <strong>you only got: {this.state.remainingChars} left to type!</strong>
      </div>
    );
  }
}

export default TwitterMessage;
