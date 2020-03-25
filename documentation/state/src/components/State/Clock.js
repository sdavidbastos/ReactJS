/*State e Ciclos de vida */
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  /* componentDidMount: é chamado sempre quando o Clock for renderizado pela primeira vez na DOM. (configurar) */
  componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
    )
  }
  /* componentWillUnmount: limpa o */
  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
      this.setState({
          date: new Date()
      })
  }

  render() {
    return (
      <>
        <h1>Relógio</h1>
        <h2>São {this.state.date.toLocaleTimeString()}.</h2>
      </>
    );
  }
}

export default Clock;
