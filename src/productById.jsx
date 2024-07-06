import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ProductById extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    render() {
        return (
            <div className="col-lg-6 mx-auto">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">
                            #{this.state.product.id}
                            <span className="pull-right hand-icon" onClick={() => this.props.onDelete(this.state.product)}>
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                        <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
                        <div>{this.state.product.price}</div>
                    </div>
                    <div className="card-footer card-foot-flex">
                        <div className="foot-left">
                            <span className="padge">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => this.props.onIncrement(this.state.product, 20)}>+</button>
                                <button className="btn btn-outline-success" onClick={() => this.props.onDecrement(this.state.product, 0)}>-</button>
                            </div>
                        </div>
                        <div className="foot-right">
                            <Link to="/shoppingCart" className="btn btn-secontary">Back...</Link>

                        </div>
                    </div>
                </div >
            </div>

        )
    }
    componentDidMount = async () => {
        document.title = "productById=App";
        const id = this.props.match.params.id;
        let response = await fetch(`http://localhost:5000/product/${id}`);
        let body = await response.json();
        console.log('body', body);
        if (body) {
            this.setState({ product: body });
        }
    }
}