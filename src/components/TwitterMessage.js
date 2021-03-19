import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: []
    };
  }

  handleMessageChange = event => {
    this.setState({
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
      </div>
    );
  }
}

export default TwitterMessage;
