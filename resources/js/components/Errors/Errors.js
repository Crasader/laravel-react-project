import React from "react"

export default class Errors extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="alert alert-danger" key={this.props.key}>
                { this.props.message }
            </div>
        )
    }

}