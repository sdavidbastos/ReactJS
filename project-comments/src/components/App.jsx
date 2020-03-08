import React, { Component } from "react";

import Post from "./Post";
import Comment from "./Comment"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Post title="Apredendo ReactJS com Rocketseat"/>
        <Comment text="Bom post" />
        <Post title="ReactJS é demais!!"/>
        <Comment text="Bom post" />
        <Post title="Em breve mais vídeos"/>
        <Comment text="Bom post" />
      </div>
    );
  }
}
