import React, {Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import "./style.css";

class NotFound extends Component {
  render() {
    return (
    <div>
      <Header />
      <Content className="page-notfound">
        <h1>404: PAGE NOT FOUND</h1>
        <button onClick={() => history.back()}>Back</button>
      </Content>
      <Footer />
    </div>
    );
  }
}

export default NotFound;