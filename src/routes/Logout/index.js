import React, { Component} from 'react';
import { removeCookie} from '../../utils/cookie';
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Nav from "../../components/Nav";

class Logout extends Component {
    constructor(props) {
        super(props);
        removeCookie("loggedIn");
    }

    render() {
        return (
            <div>
                <Header>
                    <Nav active to="/logout">Logout</Nav>
                    <Nav to="/login">Login</Nav>
                </Header>
                <Content>
                <span>U bent uitgelogd.</span>
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default Logout;