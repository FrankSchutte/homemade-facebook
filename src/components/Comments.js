import React, {Component} from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import "./Comments.css";

class Comments extends Component {
    render() {
        const comments = this.props.data;
        return (
            <div className="comments">
                {
                    comments.map(comment => <Comment key={comment.author + "-" + comment.dateModified} data={comment}/>)
                }
                {this.props.handleNewComment ? <NewComment onSubmit={this.props.handleNewComment} /> : ""}
            </div>
        )
    }
}

export default Comments;