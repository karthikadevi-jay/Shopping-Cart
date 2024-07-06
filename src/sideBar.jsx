import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class SideBar extends Component {
    render() {
        return (
            <div className="mt-2">
                <h4 className="p-1 border-bottom">Side Bar</h4>
                <div className="list-group m-2">
                    <NavLink to="/dashBoard" className="list-group-item list-group-item-action" activeClassName="active">DashBoard</NavLink>
                    <NavLink to="/mainContent" className="list-group-item list-group-item-action" activeClassName="active">Main Content</NavLink>
                    <NavLink to="/shoppingCart" className="list-group-item list-group-item-action" activeClassName="active">Shopping Cart</NavLink>
                </div>
            </div>
        )
    }
    componentDidMount() {
        document.title = "sideBar-App";
    }
}