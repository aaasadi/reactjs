import { Component } from "react";
import "../style/button.css";

class Button extends Component {
  constructor(props) {
    super(props);

    console.log("button component", this.props);
  }
  render() {
    return (
      <button className="btn">
        {this.props.text} {this.props.link}
      </button>
    );
  }
}

export default Button;
