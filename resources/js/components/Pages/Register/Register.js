import React from "react"
import Validator from "validator"

import Error from "../../Errors/Errors"

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
                password: "",
                password_confirm: ""
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
        this.setState({ name: event.target.value })

        const name = Validator.isByteLength(this.state.name, {min: 5})

        if (name == false) {
            this.state.errors.name = "Your name must be at least 6 characters."
        } else {
            if (this.state.errors.name) {
                delete this.state.errors.name
            }
        }
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
            this.state.errors.password = "Your password must be superior at 6."
        } else {
            if (this.state.errors.password) {
                delete this.state.errors.password
            }
        }
    }

    hendleChangeConfirmPassword (event) {
        event.preventDefault()
        this.setState({ confirm_password: event.target.value })
        const confirmPassword = Validator.matches(this.state.confirm_password, this.state.password)
        if (confirmPassword === false) {
            this.state.errors.password_confirm = "Your password is not confirmed."
        } else {
            if (this.state.errors.password_confirm) {
                delete this.state.errors.password_confirm
            }
        }
    }

    checkFormValidation () {
        if (this.state.errors.name === undefined && this.state.errors.email === undefined && this.state.errors.password === undefined && this.state.errors.password_confirm === undefined) {
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
                            <div className="card-header">Register Component</div>

                            <div className="card-body">
                                { this.getErrorsMessage() }
                                <form onSubmit={ this.handleSubmit } autoComplete="off">
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
                                        <button className="btn btn-primary">Register</button>
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