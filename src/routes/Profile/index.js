import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Post from "../../components/Post"
import { posts } from "../../store";
import { getCookie } from "../../utils/cookie";
import "./style.css";
import "../Timeline/style.css";

class Profile extends Component {
    constructor(props) {
        super(props);
        if (!getCookie("loggedIn")) {
            history.push("/login")
        }
        const filteredPosts = {};
        const user = this.props.params.user;
        Object.keys(posts).forEach(_id => {
            let post = posts[_id];
            if (post.author === user) {
                filteredPosts[_id] = posts[_id];
            }
        });

        this.state = {
            user: user,
            posts: filteredPosts
        }
    }

    render() {
        const {posts} = this.state;
        const postIds = Object.keys(posts);
        return (
            <div>
                <Header />
                <Content className="page-page_timeline">
                    <h1>Profile</h1>
                    <form onSubmit={this.filterPosts}>
                        <label>
                            <span>filter on title:</span>
                            <input type="text" name="filter"/>
                            <input type="submit" value="Seach"/>
                        </label>
                    </form>
                    {
                        postIds.map(_id => <Post key={_id} data={posts[_id]}/>)
                    }
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Profile;