import React from "react"

export default class Errors extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="alert alert-danger">
                { this.props.message }
            </div>
        )
    }

}