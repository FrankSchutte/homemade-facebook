import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Post from "../../components/Post";
import {posts} from "../../store";
import "./style.css";
import history from "../../utils/history";
import {getCookie} from "../../utils/cookie";
import Nav from "../../components/Nav";

class Timeline extends Component {
    constructor(props) {
        super(props);
        if (!getCookie("loggedIn")) {
            history.push("/login");
            return;
        }

        this.state = {
            posts
        }
    }

    filterPosts = event => {
        event.preventDefault();
        const filter = event.target.filter.value;
        if (filter) {
            this.setState({posts: this.getFilteredPosts(filter)})
        } else {
            this.setState({posts});
        }
    };

    render() {
        const {posts} = this.state;
        const postIds = Object.keys(posts);

        return (
            <div>
                <Header>
                    <Nav active to="/">Timeline</Nav>
                    <Nav to={"/profile/" + getCookie("loggedIn")}>Profile</Nav>
                    <Nav to="/logout">Logout</Nav>
                    <Nav to="/add" testProp="test prop value">Add Post</Nav>
                </Header>
                <Content className="page-timeline">
                    <h1>Timeline</h1>
                    <form className="filter" onSubmit={this.filterPosts}>
                        <input type="text" name="filter"/>
                        <input type="submit" value="Search"/>
                    </form>
                    <div className="posts">
                        {
                            postIds.map(_id => <Post key={_id} data={posts[_id]}/>)
                        }
                    </div>
                </Content>
                <Footer />
            </div>
        );
    }

    getFilteredPosts(filter) {
        filter = filter.toLowerCase();
        const filteredPosts = {};
        Object.keys(posts).forEach(_id => {
            if (posts[_id].title.toLowerCase().indexOf(filter) !== -1) {
                filteredPosts[_id] = posts[_id];
            }
        });
        return filteredPosts;
    }
}

export default Timeline;