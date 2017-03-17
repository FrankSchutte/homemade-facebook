import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Post from "../../components/Post";
import {posts} from "../../store";
import "./style.css";
import history from "../../utils/history";
import { getCookie } from "../../utils/cookie"


class Timeline extends Component {
    constructor(props) {
        super(props);
        if (!getCookie("loggedIn")) {
            history.push("/login")
        }
    }

    render() {
        const postIds = Object.keys(posts);

        return (
            <div>
                <Header />
                <Content className="page-timeline">
                    <h1>Timeline</h1>
                    {
                        postIds.map(_id => <Post key={_id} data={posts[_id]}/>)
                    }
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Timeline;