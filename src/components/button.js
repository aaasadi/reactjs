import { Component } from "react";
import "../style/button.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="btn">{this.props.text}</button>;
  }
}

export default Button;
