import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MainContent extends Component {
    state = {
        pageTitle: "coustomer",
        coustomerCount: 5,
        coustomer: []

    };
    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">
                    {this.state.pageTitle}
                    <span>coustomer count:{this.state.coustomerCount}</span>
                    <Link to="/newCustomer" className="btn btn-info" >New Customer</Link>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>PhoneNumber</th>
                            <th>Address</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    {/*<tbody>
                        {
                            this.state.coustomer.map((v) => {
                                return (<tr key={v.id}>
                                    <td>{v.id}</td>
                                    <td>{v.name}</td>
                                    <td>{v.phone}</td>-----this one for normal
                                    <td>{v.phone == null ? (<div className="bg-warning p-2">No Phone</div>) : (v.phone)}</td>---condition based here instand of "No phone" we can use <div>No Phone</div>
                                    <td>{v.phone ? (v.phone) : (<div className="bg-warning p-2 text-center">No Phone</div>)}</td>
                                    <td>{this.getPhone(v.phone)}</td>
                                    <td>{v.address.state}</td>
                                </tr>);
                            })
                        }
                    </tbody>*/}
                    <tbody>{this.getCoustomRow()}</tbody>
                </table>
            </div>
        );
    }
    componentDidMount = async () => {
        let response = await fetch("http://localhost:5000/coustomer", { method: "GET" });
        if (response.ok) {
            let body = await response.json();
            this.setState({ coustomer: body, coustomerCount: body.length });
        }
        else {
            console.log('Error=>', response.status);
        }
    }
    getCoustomRow = () => {
        return this.state.coustomer.map((v, i) => {
            return (<tr key={v.id}>
                <td>{v.id}</td>
                <td>
                    <img src={v.photo} alt="image" />
                    <div>
                        <button className="btn btn-sm btn-secondary" onClick={() => this.onClickEvent(v, i)}>Change Picture</button>
                    </div>
                </td>
                {/*<td style={{ backgroundColor: v.name.startsWith('j') ? 'green' : 'red' }}>{v.name}</td>
                <td style={this.customerNameStyle(v.name)}>{v.name}</td>*/}
                <td className={this.customerNameStyle(v.name)}>{v.name}</td>
                <td>{this.getPhone(v.phone)}</td>
                <td>{v.address.state}</td>
                <td>
                    <Link to={`/updateCustomer/${v.id}`} className="btn btn-info">Edit</Link>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(v.id)}>Delete</button>
                </td>
            </tr>
            );
        });


    }
    customerNameStyle = (vname) => {
        if (vname.startsWith('j')) return "green-highLight";
        else if (vname.startsWith('p')) return "red-highlight";
        else return "";
    }
    onClickEvent = (v, i) => {
        var custArr = this.state.coustomer;
        custArr[i].photo = "https://picsum.photos/104/60";
        this.setState({ coustomer: custArr });

        //console.log(v);
        //console.log('index', i);
    }
    getPhone = (phone) => {
        if (phone) {
            return phone;
        }
        else {
            return <div className="bg-warning p-2 text-center">No Phone</div>;
        }
    }
    handleDelete = async (id) => {

        if (window.confirm('Are you sure?')) {
            var response = await fetch(`http://localhost:5000/coustomer/${id}`, { method: "DELETE" });
        }
        if (response.ok) {
            var newCustomer = [...this.state.coustomer];
            newCustomer = newCustomer.filter((v) => {
                return v.id != id;
            });
        }
        this.setState({ coustomer: newCustomer });
    }
}