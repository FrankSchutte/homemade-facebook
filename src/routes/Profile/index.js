import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import "./style.css";

class Profile extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content><h1>{this.props.params.user}</h1></Content>
                <Footer />
            </div>
        );
    }
}

export default Profile;