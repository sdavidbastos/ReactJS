import React, { Component } from "react";
import Comment from "./Comment";

export default class Post extends Component {
  constructor(props) {
    super(props);
    /* Todas as variáveis da aplicação serão gravadas nesse estado */
    this.state = {
      comments: [],
      newCommentText: ""
    };
    /* Referenciar a variável this em seu escopo */
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSubmit(e) {
    this.setState({
      comments: [...this.state.comments, { text: this.state.newCommentText }]
    })
    console.log(this.state);

    this.setState({ newCommentText: "" });

    e.preventDefault();
  }
  handleTextChange(e) {
    this.setState({ newCommentText: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleTextChange} />
          <button type="submit">Comentario</button>
        </form>
        {this.state.comments.map((comment, index) => (
          <Comment key={index} text={comment.text} />
        ))}
      </div>
    );
  }
}
