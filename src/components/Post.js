import React, {Component} from "react";
import Markdown from "./Markdown";
import Comments from "./Comments";
import {formatDateTime} from "../utils/date";

class Post extends Component {
    render() {
        const {_id, title, description, author, dateModified, comments, likes} = this.props.data;

        return (
            <div className="post" id={_id}>
                <h2>{title}</h2>
                <Markdown data={description} />
                <span className="author">{author}</span>
                <span className="dateModified">{formatDateTime(dateModified)}</span>
                <span className="likes">{likes}</span>
                <Comments data={comments}/>
            </div>
        )
    }
}

export default Post;