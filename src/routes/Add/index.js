import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import "./style.css";
import {getCookie} from "../../utils/cookie";
import Nav from '../../components/Nav'

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    render() {
        return (
            <div>
                testProp:{console.log(this.props)}
                <Header>
                    <Nav to="/">Timeline</Nav>
                    <Nav to={"/profile/" + getCookie("loggedIn")}>Profile</Nav>
                    <Nav to="/logout">Logout</Nav>
                    <Nav active to="/add">Add Post</Nav>
                </Header>
                <Content className="page-add">
                    <h1>Add Post</h1>
                    <form>
                        <label>
                            Title:
                            <input type="text"
                                   onChange={this.onChangeTitle.bind(this)}/>
                        </label>
                        <label>
                            Description:
                            <input type="text"
                                   onChange={this.onChangeDescription.bind(this)}/>
                        </label>
                        <input type="submit"/>
                    </form>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Add;