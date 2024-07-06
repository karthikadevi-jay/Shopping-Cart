import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Product extends Component {
    state = {
        /*=>1<= id: this.props.product.id,
        productName: this.props.product.productName,
        price: this.props.product.price,
        quantity: this.props.product.quantity*/
        product: this.props.product
    }
    render() {
        //console.log(this.props)
        return (
            // ---this methods is used to render for specific product------
            /*<div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">#{this.props.id}</div>
                        <h5 className="pt-5 border-top">{this.props.productName}</h5>
                        <div>{this.props.price}</div>
                    </div>
                </div >
        </div>*/

            /* =>1<= <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">#{this.state.id}</div>
                        <h5 className="pt-2 border-top">{this.state.productName}</h5>
                        <div>{this.state.price}</div>
                    </div>
                </div >
            </div>*/
            <div className="col-lg-6">
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
                            <Link to={`product/${this.state.product.id}`} className="mr-5">Detail</Link>
                            {this.props.children}
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}