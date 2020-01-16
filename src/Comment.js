//your code here
import React, {Component} from 'react';
import BlogPost from './BlogPost.js';

export default class Comment extends Component {
  render() {
    return (
      <div>
        {this.props.commentText}
      </div>
    );
  }
}
