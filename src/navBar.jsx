import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import history from "./history";
class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">My App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {!this.props.isLoggedIn ? (<li className="nav-item">
                                    <NavLink to="/" className="nav-link" activeClassName="active" exact={true}>Login</NavLink>
                                </li>) : ""}
                                {!this.props.isLoggedIn ? (<li className="nav-item">
                                    <NavLink to="/registration" className="nav-link" activeClassName="active">Registration Form</NavLink>
                                </li>) : ""}
                                {this.props.isLoggedIn ? (<li className="nav-item">
                                    <NavLink to="/dashBoard" className="nav-link" activeClassName="active">DashBoard</NavLink>
                                </li>) : ""}

                                {this.props.isLoggedIn ? (<li className="nav-item">
                                    <NavLink to="/mainContent" className="nav-link" activeClassName="active">Maincontent</NavLink>
                                </li>) : ""}

                                {this.props.isLoggedIn ? (<li className="nav-item">
                                    <NavLink to="/shoppingCart" className="nav-link" activeClassName="active">ShoppingCart</NavLink>
                                </li>) : ""}

                                {this.props.isLoggedIn ? (<li className="nav-item">
                                    <a href="/#" className="nav-link" onClick={this.handleLogout}>Logout</a>
                                </li>) : ""}

                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
    handleLogout = (event) => {
        event.preventDefault();
        this.props.updateLoggingStatus(false);
        //history.replace("/");
        document.location.hash = "/";
    }

}
export default NavBar;