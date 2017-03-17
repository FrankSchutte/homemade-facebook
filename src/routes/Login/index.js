import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import "./style.css";

class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content className="page-login">
                    <h1>Login</h1>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Login;