import React from "react"
import Validator from "validator"

import Error from "../../Errors/Errors"

export default class Login extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errors: {
                email: "",
                password: ""
            },
            formValidate: false
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.hendleChangePassword = this.hendleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeEmail (event) {
        event.preventDefault()
        this.setState({ email: event.target.value })

        const email = Validator.isEmail(this.state.email)
        
        if (email == false) {
            this.state.errors.email = "Your email is not validate."
        } else {
            if (this.state.errors.email) {
                delete this.state.errors.email
            }
        }
    }

    hendleChangePassword (event) {
        event.preventDefault()
        this.setState({ password: event.target.value })
        const password = Validator.isByteLength(this.state.password, {min: 6})
        if (password == false) {
            this.state.errors.password = "Your password must be superior at 6"
        } else {
            if (this.state.errors.password) {
                delete this.state.errors.password
            }
        }
    }

    getErrorsMessage () {
        return Object.values(this.state.errors).map((error, index) => {
            if (error) {
                return (
                    <Error message={error} key={index} />
                )
            }
        })
    }

    checkFormValidation () {
        if (this.state.errors.email === undefined && this.state.errors.password === undefined) {
            this.state.formValidate = true
        }
        return this.state.formValidate
    }

    handleSubmit (event) {
        event.preventDefault()
        // Method checks if the form is validated.
        if (this.checkFormValidation()){
            console.log("Form is validated")
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login Component</div>

                            <div className="card-body">
                                { this.getErrorsMessage() }
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <input type="email" 
                                        className="form-control" 
                                        name="email" 
                                        placeholder="email@domaine.com"
                                        onChange={ this.handleChangeEmail } />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" 
                                        className="form-control" 
                                        name="password" 
                                        placeholder="Your password"
                                        onChange={ this.hendleChangePassword } />
                                    </div>
                                    <div className="from-group">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}