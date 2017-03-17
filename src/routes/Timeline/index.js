import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Post from "../../components/Post";
import {posts} from "../../store";
import "./style.css";
import history from "../../utils/history";
import { getCookie } from "../../utils/cookie";
import {sortDateModifiedDesc} from "../../utils/dataHelper";


class Timeline extends Component {
    constructor(props) {
        super(props);
        if (!getCookie("loggedIn")) {
            history.push("/login")
        }

        this.state = {
            posts: this.orderPosts(posts)
        }
    }

    filterPosts = event => {
      event.preventDefault();
      const filter = event.target.filter.value;
      if (filter) {
          this.setState({posts: this.orderPosts(this.getFilteredPosts(filter))})
      } else {
          this.setState({posts: this.orderPosts(posts)});
      }
    };

    orderPosts = posts => {
        return posts;
    };

    render() {
        const {posts} = this.state;
        const postIds = Object.keys(posts);

        return (
            <div>
                <Header />
                <Content className="page-timeline">
                    <h1>Timeline</h1>
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