import React, { Component} from 'react';
import { removeCookie} from '../../utils/cookie';
import "./style.css";

class Logout extends Component {
    constructor(props) {
        super(props);
        removeCookie("loggedIn");
    }

    render() {
        return (
            <div>
                <span>U bent uitgelogd.</span>
            </div>
        );
    }
}

export default Logout;