import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import "./style.css";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content className="page-dashboard">
                    <h1>DASHBOARD</h1>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;