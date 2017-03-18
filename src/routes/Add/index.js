import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import "./style.css";
import {getCookie} from "../../utils/cookie";
import Nav from '../../components/Nav'
import NewPost from '../../components/NewPost'
import {posts} from "../../store";
import history from '../../utils/history';

class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: 'hsla(' + (Math.random() * 360) + ', 50%, 50%, .5)'
        }
    }

    handleNewPost = post => {
        posts[post._id] = post;
        history.push('/');
    };

    render() {
        const {color} = this.state;

        return (
            <div>
                <Header>
                    <Nav to="/">Timeline</Nav>
                    <Nav to={"/profile/" + getCookie("loggedIn")}>Profile</Nav>
                    <Nav to="/logout">Logout</Nav>
                    <Nav active to="/add">Add Post</Nav>
                </Header>
                <Content className="page-add">
                    <div className="post" style={{backgroundColor: color}}>
                        <h1>Add Post</h1>
                        <NewPost onSubmit={this.handleNewPost}/>
                    </div>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Add;