import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  state = {};

  handleClick = (btnName) => {
    this.props.clickHandler(btnName);
  };

  render() {
    // const class_btn = this.props.orange? 'orange':(this.props.wide? 'wide': "btn-component");
    const class_btn = [
      "btn-component",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={class_btn.join(" ").trim()}>
        <button onClick={() => this.handleClick(this.props.name)}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
