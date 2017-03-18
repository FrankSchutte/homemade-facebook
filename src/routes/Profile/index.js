import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Post from "../../components/Post"
import {posts} from "../../store";
import {getCookie} from "../../utils/cookie";
import "./style.css";
import "../Timeline/style.css";
import Nav from "../../components/Nav";

class Profile extends Component {
    constructor(props) {
        super(props);
        if (!getCookie("loggedIn")) {
            history.push("/login");
            return;
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
                <Header>
                    <Nav to="/">Timeline</Nav>
                    <Nav active to={"/profile/" + getCookie("loggedIn")}>Profile</Nav>
                    <Nav to="/logout">Logout</Nav>
                    <Nav to="/add">Add Post</Nav>
                </Header>
                <Content className="page-page_timeline">
                    <h1>Profile</h1>
                    <form className="filter" onSubmit={this.filterPosts}>
                        <input type="text" name="filter"/>
                        <input type="submit" value="Search"/>
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