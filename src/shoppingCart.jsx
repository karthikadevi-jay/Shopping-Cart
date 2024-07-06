//section 4-----Render Child Component-------
import React, { Component } from "react";
import Product from "./product";
export default class ShoppingCart extends Component {
    state = {

        product: []
    }
    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <div className="row">
                    {this.state.product.map((prot) => {
                        return <Product
                            key={prot.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            product={prot}
                            onDelete={this.handleDelete}
                        /*id={prot.id} productName={prot.productName} price={prot.price} quantity={prot.quantity}----this methods is used to render for specific product----*/ >
                            <button className="btn btn-primary">Buy Now</button>
                        </Product>
                    })}
                </div>
            </div>);
    }
    componentDidMount = async () => {
        document.title = "shoppingCart-App";
        let response = await fetch("http://localhost:5000/product", { method: 'GET' });
        let prod = await response.json();
        this.setState({ product: prod });
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(
            "componentDidUpdate-parent",
            prevProps, "old-value",
            prevState, "old-value",
            this.props, "updated value",
            this.state, "updated value"
        );
    }
    componentWillUnmount() {

    }
    componentDidCatch(error, info) {

    }
    handleIncrement = (product, maxVal) => {
        //console.log("increment", product);
        let newProductArr = [...this.state.product];
        let index = newProductArr.indexOf(product);
        if (newProductArr[index].quantity < 20) {
            newProductArr[index].quantity++;
        }
        this.setState({ product: newProductArr });
    }
    handleDecrement = (product, minVal) => {
        //console.log("decrement", product);
        let newProductArr = [...this.state.product];
        let index = newProductArr.indexOf(product);
        if (newProductArr[index].quantity > minVal) {
            newProductArr[index].quantity--;
        }
        this.setState({ product: newProductArr });

    }
    handleDelete = (product) => {
        let newProductArr = [...this.state.product];
        const index = newProductArr.indexOf(product);
        if (window.confirm("Are you sure to delete?")) {
            newProductArr.splice(index, 1);
        }
        this.setState({ product: newProductArr });

    }
}