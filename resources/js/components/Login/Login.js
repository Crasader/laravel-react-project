import React from "react"

export default class Login extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.hendleChangePassword = this.hendleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit (event) {
        event.preventDefault()
        console.log(this.state)
    }

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login Component</div>

                            <div className="card-body">
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