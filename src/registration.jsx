import React, { Component } from "react";
export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fullname: "",
            dateOfBirth: "",
            gender: "",
            country: "",
            receiveNewsLetter: false,
            massage: "",
            controls: ["email", "password", "fullname", "dateOfBirth", "gender", "country", "receiveNewsLetter"],
            errors: {
                email: [],
                password: [],
                fullname: [],
                dateOfBirth: [],
                gender: [],
                country: [],
                receiveNewsLetter: []
            },
            dirty: {
                email: false,
                password: false,
                fullname: false,
                dateOfBirth: false,
                gender: false,
                country: false,
                receiveNewsLetter: false,
            }
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h4>Registration</h4>
                    <p>
                        <label htmlFor="txtEmail">Email:</label>
                        <input type="text" id="txtEmail" name="email" value={this.state.email} autoFocus="autofocus"
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.email = true;
                                this.setState({ email: e.target.value, dirty: dirty },
                                    this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.email = true;
                                this.setState({ dirty: dirty }, this.validate);
                            }}
                        />
                        <span className="text-danger">
                            {this.state.errors.email[0] && this.state.dirty.email ? this.state.errors.email : ""}
                        </span>
                    </p>
                    <p>
                        <label htmlFor="pPassword">Password:</label>
                        <input type="password" id="pPassword" name="password" value={this.state.password}
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.password = true;
                                this.setState({ password: e.target.value, dirty: dirty }, this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.password = true;
                                this.setState({ dirty: dirty }, this.validate);
                            }}
                        />
                        <span className="text-danger">
                            {this.state.errors.password[0] && this.state.dirty.password ? this.state.errors.password : ""}
                        </span>
                    </p>
                    <p>
                        <label htmlFor="txtName">Full Name:</label>
                        <input type="text" id="txtName" name="fullName" value={this.state.fullname}
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.fullname = true;
                                this.setState({ fullname: e.target.value, dirty: dirty }, this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.fullname = true;
                                this.setState({ dirty: dirty }, this.validate);
                            }}
                        />
                        <span className="text-danger">
                            {this.state.errors.fullname[0] && this.state.dirty.fullname ? this.state.errors.fullname : ""}
                        </span>
                    </p>
                    <p>
                        <label htmlFor="dDob">DOB:</label>
                        <input type="date" id="dDob" name="dob" value={this.state.dateOfBirth}
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.dateOfBirth = true;
                                this.setState({ dateOfBirth: e.target.value, dirty: dirty }, this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.dateOfBirth = true;
                                this.setState({ dirty: dirty }, this.validate);
                            }}
                        />
                        <span className="text-danger">
                            {this.state.errors.dateOfBirth[0] && this.state.dirty.dateOfBirth ? this.state.errors.dateOfBirth : ""}
                        </span>
                    </p>
                    <p>
                        <label>Gender:</label>
                        <input type="radio" name="gender" id="rMale" value="male"
                            checked={this.state.gender === "male" ? true : false}
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.gender = true;
                                this.setState({ gender: e.target.value, dirty: dirty }, this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.gender = true;
                                this.setState({ dirty: dirty });
                            }}
                        />
                        <label htmlFor="rMale">Male</label>
                        <input type="radio" id="rFemale" name="gender" value="female"
                            checked={this.state.gender === "female" ? true : false}
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.gender = true;
                                this.setState({ gender: e.target.value, dirty: dirty }, this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.gender = true;
                                this.setState({ dirty: dirty });
                            }} />
                        <label htmlFor="rFemale">Female</label>
                        <span className="text-danger">
                            {this.state.errors.gender[0] && this.state.dirty.gender ? this.state.errors.gender : ""}
                        </span>

                    </p>
                    <p>
                        <label htmlFor="sCountry">Country:</label>
                        <select id="sCountry" name="country" value={this.state.country}
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.country = true;
                                this.setState({ country: e.target.value, dirty: dirty }, this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.country = true;
                                this.setState({ dirty: dirty });
                            }}>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">Canada</option>
                        </select>
                        <span className="text-danger">
                            {this.state.errors.country[0] && this.state.dirty.country ? this.state.errors.country : ""}
                        </span>
                    </p>
                    <p>
                        <input type="checkbox" id="checkbox" value="true"
                            checked={this.state.receiveNewsLetter}
                            onChange={(e) => {
                                let dirty = this.state.dirty;
                                dirty.receiveNewsLetter = true;
                                this.setState({ receiveNewsLetter: e.target.checked, dirty: dirty }, this.validate);
                            }}
                            onBlur={(e) => {
                                let dirty = this.state.dirty;
                                dirty.receiveNewsLetter = true;
                                this.setState({ dirty: dirty });
                            }}
                        />
                        <label id="checkbox">Receive News Letter</label>
                    </p>
                    <div>{this.state.massage}</div>
                    <p>
                        <button className="btn btn-success pull-right" onClick={this.handleRegister}>Register</button>
                    </p>
                    <ul className="text-danger">
                        {Object.keys(this.state.errors).map((v) => {
                            if (this.state.dirty[v]) {
                                return this.state.errors[v].map((err) => {
                                    return <li key={err}>{err}</li>;
                                });
                            } else {
                                return "";
                            }
                        })}
                    </ul>
                    {JSON.stringify(this.state)}
                </div>
            </div>
        )
    }
    validate = () => {
        const validEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        const validPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
        let errors = {}
        this.state.controls.forEach((v) => {
            errors[v] = [];
            switch (v) {
                case "email":
                    if (!this.state.email) {
                        errors[v].push("email can't be blank");
                    }
                    if (this.state.email) {
                        if (!validEmail.test(this.state.email)) {
                            errors[v].push("proper email address is expected");
                        }
                    }

                    break;
                case "password":
                    if (!this.state.password) {
                        errors[v].push("password can't be blank");
                    }
                    if (this.state.password) {
                        if (!validPassword.test(this.state.password)) {
                            errors[v].push("password must contain 6 character");
                        }
                    }
                    break;
                case "fullname":
                    if (!this.state.fullname) {
                        errors[v].push("you want enter your name");
                    }
                    break;
                case "dateOfBirth":
                    if (!this.state.dateOfBirth) {
                        errors[v].push("please enter the DOB");
                    }
                    if (this.state.dateOfBirth) {
                        let dob = new Date(this.state[v]).getTime();
                        console.log('dob', dob);
                        let today = new Date().getTime();
                        console.log("today----------->", today);
                        if (today - (18 * 365.25 * 24 * 60 * 60 * 1000) < dob) {
                            errors[v].push("minimum age is 18 year");
                        }
                    }
                    break;
                case "gender":
                    if (!this.state.gender) {
                        errors[v].push("Gender should not be empty");
                    }
                    break;
                case "country":
                    if (!this.state.country) {
                        errors[v].push("Country should not be empty");
                    }
                    break;
                default:
                    break;

            }
            this.setState({ errors: errors });
        });
        //console.log("errors", errors);
    }
    isValid = () => {
        let valid = true;
        for (let key in this.state.errors) {
            if (this.state.errors[key].length > 0) {
                valid = false;
            }
        }
        return valid;
    }
    handleRegister = async () => {
        let dirty = this.state.dirty;
        Object.keys(dirty).forEach((v) => {
            dirty[v] = true;
        });
        this.setState({ dirty: dirty });
        this.validate();
        if (this.isValid()) {
            var user = {
                email: this.state.email,
                password: this.state.password,
                fullname: this.state.fullname,
                dateOfBirth: this.state.dateOfBirth,
                gender: this.state.gender,
                country: this.state.country,
                receiveNewsLetter: this.state.receiveNewsLetter
            }
            let response = await fetch("http://localhost:5000/users", {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Content-type": "application/json" }
            });
            let body = response.json();
            if (response.ok) {
                this.setState({ massage: "Successfully Register" });
            }
            else {
                console.log(response, body);
                this.setState({ massage: "Error in Registration" });
            }
        }
        else {
            this.setState({ massage: "InValid" });
        }
    }
}