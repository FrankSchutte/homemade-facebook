import React, {Component} from "react";
import "./NewComment.css";

class NewComment extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const comment = event.target.comment.value;

        if (comment) {
            this.props.onSubmit(comment);
            event.target.comment.value = "";
        }
    };

    render() {
        return (
            <form className="newComment" onSubmit={this.handleSubmit}>
                <textarea name="comment"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default NewComment;