import React from "react"
import Validator from "validator"

import Error from "../Errors/Errors"

export default class Register extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            errors: {
                name: "",
                email: "",
                password: ""
            },
            formValidate: false
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.hendleChangePassword = this.hendleChangePassword.bind(this)
        this.hendleChangeConfirmPassword = this.hendleChangeConfirmPassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName (event) {
        event.preventDefault()
        this.setState({
            name: event.target.value
        })
    }

    handleChangeEmail (event) {
        event.preventDefault()
        this.setState({
            email: event.target.value
        })
    }

    hendleChangePassword (event) {
        event.preventDefault()
        this.setState({
            password: event.target.value
        })
    }

    hendleChangeConfirmPassword (event) {
        event.preventDefault()
        this.setState({
            confirm_password: event.target.value
        })
    }

    checkFormValidation () {
        const name = Validator.isByteLength(this.state.name, {min: 5})
        const email = !Validator.isEmpty(this.state.email)
        const password = this.state.password === this.state.confirm_password
        const passwordMin = Validator.isByteLength(this.state.password, {min: 1})

        if (name == false) {
            this.state.errors.name = "Your name must be at least 6 characters."
        } else {
            if (this.state.errors.name) {
                delete this.state.errors.name
            }
        }

        if (email == false) {
            this.state.errors.email = "Your email is not validate"
        } else {
            if (this.state.errors.email) {
                delete this.state.errors.email
            }
        }

        if (password == false || passwordMin == false) {
            this.state.errors.password = "Your password is not confirmed"
        } else {
            if (this.state.errors.password) {
                delete this.state.errors.password
            }
        }

        if (this.state.errors.name === undefined && this.state.errors.email === undefined && this.state.errors.password === undefined) {
            this.state.formValidate = true
        }

        return this.state.formValidate

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
                                        <input type="text" 
                                        className="form-control" 
                                        name="name" 
                                        placeholder="Your user name"
                                        onChange={ this.handleChangeName } />
                                    </div>
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
                                    <div className="form-group">
                                        <input type="password" 
                                        className="form-control" 
                                        name="confirm_password" 
                                        placeholder="Confirm your password"
                                        onChange={ this.hendleChangeConfirmPassword } />
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