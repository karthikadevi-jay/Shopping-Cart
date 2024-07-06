import React, { Component } from "react";
//import history from "./history";
export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            massage: ''
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h3 className="border-bottom py-2 my-2">Input From</h3>
                    <div className="form-group form-row">
                        <label for="txtEmail">Email:</label>
                        <input type="text" id="txtEmail" name="email" placeholder="karthi@gmail.com"
                            className="form-control"
                            onChange={
                                (event) => {
                                    this.setState({ email: event.target.value });
                                    //console.log('email:', this.state.email);
                                }
                            } />
                    </div>
                    <div className="form-group form-row">
                        <label for="pPassword" className="col-lg-4">Password:</label>
                        <input type="password" id="pPassword" name="password" placeholder="karthi123"
                            className="form-control"
                            onChange={
                                (e) => {
                                    this.setState({ password: e.target.value });
                                    //console.log('password:', this.state.password);
                                }} />
                    </div>
                    <div className="pull-right m-4">
                        {this.state.massage}
                        <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
    /*onLoginClick = () => {
        if (this.state.email === "karthi29m@gmail.com" && this.state.password === 'abc123') {
            this.setState({ massage: (<span className="text-success">Logged in successfully</span>) });
        }
        else {
            this.setState({ massage: <span className="text-danger">invalid login</span> })
        }
        console.log(this.state)
    }*/
    onLoginClick = async () => {
        let response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, { method: "GET" });
        let body = await response.json();
        if (body.length > 0) {
            this.setState({ massage: "Valid Login" });
            this.props.updateLoggingStatus(true);
            this.props.history.replace("/dashBoard");
        }
        else {
            this.setState({ massage: "Not Valid Login" });
        }
    }
    componentDidMount() {
        document.title = "inputForm-App";
    }

}