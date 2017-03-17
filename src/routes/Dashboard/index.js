import React, {Component} from "react";
import Header from "../../components/pure/Header";
import Footer from "../../components/pure/Footer";
import Content from "../../components/pure/Content";
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