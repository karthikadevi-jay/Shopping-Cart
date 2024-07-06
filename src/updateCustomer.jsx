import React, { Component } from "react";
export default class UpdateCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photo: "",
            phone: "",
            city: ""
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auot">
                    <h4>Edit Customer</h4>
                    <form>
                        <div className="form-group form-row">
                            <label className="col-lg-4" for="txtName">Name</label>
                            <div className="col-lg-8">
                                <input type="text" id="txtName" name="name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
                            </div>
                        </div>
                        <div className="form-group form-row">
                            <label className="col-lg-4" for="txtPhoto">Photo</label>
                            <div className="col-lg-8">
                                <input type="text" id="txtPhoto" name="photo" value={this.state.photo} onChange={(e) => { this.setState({ photo: e.target.value }) }}></input>
                            </div>
                        </div>
                        <div className="form-group form-row">
                            <label className="col-lg-4" for="txtPhone">Phone</label>
                            <div className="col-lg-8">
                                <input type="text" id="txtPhone" name="phone" value={this.state.phone} onChange={(e) => { this.setState({ phone: e.target.value }) }}></input>
                            </div>
                        </div>
                        <div className="form-group form-row">
                            <label className="col-lg-4" for="txtCity">City</label>
                            <div className="col-lg-8">
                                <input type="text" id="txtCity" name="city" value={this.state.city} onChange={(e) => { this.setState({ city: e.target.value }) }}></input>
                            </div>
                        </div>
                        <div className="border-bottom p-2">
                            <button className="btn btn-success" onClick={this.handleSave}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    /*componentDidMount = async () => {
        let id = this.props.match.params.id;
        console.log('id', id);
        let response = await fetch(`http://localhost:5000/coustomer/${id}`, { method: "GET" });
        let body = await response.json();
        this.setState({
            name: body.name,
            photo: body.photo,
            phone: body.phone,
            city: body.address.state
        });
    }
    handleSave = async (event) => {
        event.preventDefault();
        let id = this.props.match.params.id;
        let coustomer = {
            name: this.state.name,
            photo: this.state.photo,
            phone: this.state.phone,
            address: { state: this.state.city }
        }
        let response = await fetch(`http://localhost:5000/coustomer/${id}`, {
            method: "PUT",
            body: JSON.stringify(coustomer),
            header: { "Content-type": "application/json" },
        });
        let body = await response.json();
        console.log('body', body);
        if (body) {
            this.props.history.replace("/mainContent");
        }
    }*/
    componentDidMount = async () => {
        let id = this.props.match.params.id;
        let response = await fetch(`http://localhost:5000/coustomer/${id}`, { method: "GET" });
        let body = await response.json();
        this.setState({
            name: body.name,
            photo: body.photo,
            phone: body.phone,
            city: body.address.state
        });
    }
    handleSave = async (event) => {
        event.preventDefault();
        let id = this.props.match.params.id;
        let customer = {
            name: this.state.name,
            photo: this.state.photo,
            phone: this.state.phone,
            address: { state: this.state.city }
        }
        let response = await fetch(`http://localhost:5000/coustomer/${id}`, {
            method: "PUT",
            body: JSON.stringify(customer),
            header: { "Content-type": "application/json" }
        });
        let body = await response.json();
        if (body) {
            this.props.history.replace("/mainContent");
        }
    }
}