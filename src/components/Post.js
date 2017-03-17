import React, {Component} from "react";
import Markdown from "./Markdown";
import Comments from "./Comments";
import {formatDateTime} from "../utils/date";
import "./Post.css";
import {getCookie} from "../utils/cookie";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.data.comments,
            likes: this.props.data.likes
        };
    }

    handleNewComment = comment => {
        const _id = this.props.data._id;
        const commentObj = {
            description: comment,
            dateModified: Date.now(),
            author: getCookie("loggedIn")
        };
        const newComments = this.state.comments.concat(commentObj);
        this.setState({comments: newComments});
    };

    handleNewLike = like => {
      console.log(like);
    };

    render() {
        const {_id, title, description, author, dateModified} = this.props.data;
        const {comments, likes} = this.state;

        return (
            <div className="post" id={_id}>
                <h2 className="title">{title}</h2>
                <Markdown data={description}/>
                <div className="meta">
                    <span className="author">By: {author}</span>
                    <span className="dateModified">On: {formatDateTime(dateModified)}</span>
                    <span className="likes">{likes} likes</span>
                </div>
                <h3>Comments:</h3>
                <Comments handleNewComment={this.handleNewComment} data={comments}/>
            </div>
        )
    }
}

export default Post;