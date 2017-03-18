import React from 'react';
import {getCookie} from '../utils/cookie';

class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: 'hsla(' + (Math.random() * 360) + ', 50%, 50%, .5)'
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const postObj = {
            _id: "261asd4",
            title: e.target.title.value,
            description: e.target.description.value,
            dateModified: Date.now(),
            author: getCookie('loggedIn'),
            likes: 0,

            comments: []
        };

        if (postObj) {
            this.props.onSubmit(postObj);
            e.target.title.value = '';
            e.target.description.value = '';
        }
    };

    render() {
        const {color} = this.state;

        return (
            <div className="post" style={{backgroundColor: color}}>
                <h2 className="title">New Post</h2>
                <form className="newPost" onSubmit={this.handleSubmit}>
                    <label>
                        Post Title:
                        <input name="title"/>
                    </label><br/>
                    <label>
                        Post Description:
                        <input name="description"/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    };
}

export default NewPost;
