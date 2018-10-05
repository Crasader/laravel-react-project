import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "../components/Header/Header"
import Home from "../components/Pages/Home/Home"
import Login from "../components/Pages/Login/Login"
import Register from "../components/Pages/Register/Register"
import NotFound from "../components/Pages/NotFound/NotFound"
import Post from "../components/Pages/Post/Post"

export default class AppRouter extends React.Component {

    render () {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/post/:id" component={Post} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }

}