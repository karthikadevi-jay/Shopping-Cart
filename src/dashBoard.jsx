import React, { Component } from "react";
export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <h4>Dashboard</h4>
            </div>
        )
    }
    componentDidMount() {
        document.title = "dashboard-App";
    }
}