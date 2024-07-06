import React, { Component } from "react";
import NavBar from "./navBar";
import MainContent from "./mainContent";
import ShoppingCart from "./shoppingCart";
import InputForm from "./inputForm";
import DashBoard from "./dashBoard";
import { Route, Switch } from "react-router";
import NoMatchPage from "./noMatchPage";
//import history from "./history";
import SideBar from "./sideBar";
import ProductById from "./productById";
import { HashRouter } from "react-router-dom";
import NewCustomer from "./insertCoustomer";
import UpdateCustomer from "./updateCustomer";
import Registration from "./registration";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }
    render() {
        //<MainContent />
        //<ShoppingCart />
        //<InputForm />
        return (
            <HashRouter>
                <NavBar isLoggedIn={this.state.isLoggedIn} updateLoggingStatus={this.updateLoggingStatus} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2">
                            {this.state.isLoggedIn ? <SideBar /> : ""}
                        </div>
                        <div className="col-lg-10">
                            <Switch>
                                <Route path="/" exact render={(props) => (
                                    <InputForm
                                        {...props}
                                        updateLoggingStatus={this.updateLoggingStatus}
                                    />)
                                } />
                                <Route path="/dashBoard" exact component={DashBoard} />
                                <Route path="/mainContent" component={MainContent} />
                                <Route path="/shoppingCart" exact component={ShoppingCart} />
                                <Route path="/product/:id" component={ProductById} />
                                <Route path="/newCustomer" exact component={NewCustomer} />
                                <Route path="/updateCustomer/:id" component={UpdateCustomer} />
                                <Route path="/registration" exact component={Registration} />
                                <Route path="*" component={NoMatchPage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
    updateLoggingStatus = (status) => {
        this.setState({ isLoggedIn: status });
    }
}