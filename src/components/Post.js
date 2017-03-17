import React, {Component} from "react";
import Markdown from "./Markdown";
import Comments from "./Comments";
import {formatDateTime} from "../utils/date";
import "./Post.css";
import {getCookie} from "../utils/cookie";
import {users} from "../store";

class Post extends Component {
    constructor(props) {
        super(props);

        let user = users[getCookie("loggedIn")];
        let liked = user.liked_posts.keys()[this.props.data._id];

        this.state = {
            comments: this.props.data.comments,
            likes: this.props.data.likes,
            liked: liked
        };
        this.state.color = 'hsla(' + (Math.random() * 360) + ', 50%, 50%, .5)';
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
        if (this.state.liked) {
            this.state.likes--;
            this.setState({liked: false});
        }
        else {
            this.state.likes++;
            this.setState({liked: true});
        }
    };

    render() {
        const {_id, title, description, author, dateModified} = this.props.data;
        const {comments, likes, color} = this.state;

        return (
            <div className="post" id={_id} style={{"background-color": color}}>
                <h2 className="title">{title}</h2>
                <Markdown data={description}/>
                <div className="meta">
                    <span className="author">By: {author}</span>
                    <span className="dateModified">On: {formatDateTime(dateModified)}</span>
                    <span className="likes">{likes} likes</span>
                        <button onClick={this.handleNewLike}>{this.state.liked ? "Unlike" : "Like"}</button>
                </div>
                <h3>Comments:</h3>
                <Comments handleNewComment={this.handleNewComment} data={comments}/>
            </div>
        )
    }
}

export default Post;