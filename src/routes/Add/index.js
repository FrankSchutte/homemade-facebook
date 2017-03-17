import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import "./style.css";

class Add extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content className="page-add">
                    <h1>Add Post</h1>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Add;