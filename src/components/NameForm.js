import React, {Component} from 'react'

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    handleChange = (e) => this.setState({value: e.target.value});
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitCb(this.state.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Inloggen"/>
            </form>
        );
    }
}

export default NameForm;