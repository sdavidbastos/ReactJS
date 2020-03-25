/* Manioulação de eventos */
import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    /* Bind para que o this funcione ao utilizar callback */
  }
  handleClick() {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }))
  }
  render() {
    return (
      <>
        <button onClick={()=>this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </>
    );
  }
}

export default Button;
