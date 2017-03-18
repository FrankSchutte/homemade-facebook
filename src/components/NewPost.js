import React from 'react';
import {getCookie} from '../utils/cookie';

class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tmpHash: 0
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const postObj = {
            _id: this.state.tmpHash,
            title: e.target.title.value,
            description: e.target.description.value,
            dateModified: Date.now(),
            author: getCookie('loggedIn'),
            likes: 0,

            comments: []
        };

        if (postObj) {
            this.props.onSubmit(postObj);
            this.state.tmpHash++;
            e.target.title.value = '';
            e.target.description.value = '';
        }
    };

    render() {
        return (
            <div>
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
