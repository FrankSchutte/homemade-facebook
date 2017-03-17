import React, {Component} from "react";
import {formatDateTime} from "../utils/date";
import "./Comment.css";

class Comment extends Component {
    render() {
        const {author, dateModified, description} = this.props.data;

        return (
            <div className="comment">
                <p>{description}</p>
                <div className="meta">
                    <span className="author">{author}</span>
                    <span className="dateModified">{formatDateTime(dateModified)}</span>
                </div>
            </div>
        )
    }
}

export default Comment;