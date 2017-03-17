import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import NameForm from "../../components/NameForm";
import { setCookie, getCookie } from "../../utils/cookie"
import { users } from "../../store"
import history from "../../utils/history";
import "./style.css";

class Login extends Component {
    constructor(props) {
        super(props)
        if (getCookie("loggedIn"))
            history.push("/")
    }

    onLoginAttempt = (user) => {
        if (users[user]) {
            setCookie("loggedIn", user);
            history.push("/")
        }
    };

    render() {
        return (
            <div>
                <Header />
                <Content className="page-login">
                    <h1>Login</h1>
                    <NameForm submitCb={this.onLoginAttempt.bind(this)}/>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Login;