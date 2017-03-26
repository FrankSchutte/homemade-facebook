import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Post from "../../components/Post";
// import {posts} from "../../store";
import "./style.css";
import history from "../../utils/history";
import {getCookie} from "../../utils/cookie";
import Nav from "../../components/Nav";
import {connect} from 'react-redux';

class Timeline extends Component {
    constructor(props) {
        super(props);
        if (!getCookie("loggedIn")) {
            history.push("/login");
            return;
        }

        this.state = {
            posts: this.props.posts
        };
    }

    filterPosts = event => {
        event.preventDefault();
        const filter = event.target.value;
        if (filter) {
            this.setState({posts: this.getFilteredPosts(filter)})
        } else {
            this.setState(this.props.posts);
        }
    };

    render() {
        const posts = this.props.posts;
        const postIds = Object.keys(posts);

        return (
            <div>
                <Header>
                    <Nav active to="/">Timeline</Nav>
                    <Nav to={"/profile/" + getCookie("loggedIn")}>Profile</Nav>
                    <Nav to="/logout">Logout</Nav>
                    <Nav to="/add" testProp="test prop value">Add Post</Nav>
                    <form className="filter">
                        <label>
                            <span>Search</span>
                            <input type="text" name="filter" onChange={this.filterPosts}/>
                        </label>
                    </form>
                </Header>
                <Content className="page-timeline">
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
        Object.keys(this.props.posts).forEach(_id => {
            if (this.props.posts[_id].title.toLowerCase().indexOf(filter) !== -1) {
                filteredPosts[_id] = this.props.posts[_id];
            }
        });
        return filteredPosts;
    }
}

const mapStateToProps = (state) => ({
    posts: state.postsReducer
});

export default connect(mapStateToProps)(Timeline);
