import React, {Component} from "react";
import {formatDateTime} from "../utils/date";

class Comments extends Component {
    render() {
        const comments = this.props.data;

        return (
            <div className="comments">
                {
                    comments.map(comment => <div key={comment.author + comment.dateModified}>
                        <span className="author">{comment.author}</span>
                        <p>{comment.description}</p>
                        <span className="dateModified">{formatDateTime(comment.dateModified)}</span>
                    </div>)
                }
            </div>
        )
    }
}

export default Comments;