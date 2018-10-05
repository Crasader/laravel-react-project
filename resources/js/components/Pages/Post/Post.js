import React from "react"
import axios from "axios"

export default class Post extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            content: []
        };
    }

    componentDidMount () {
        // console.log(this.props.match.params.id)
        axios.get("http://localhost:8000/api/posts/" + this.props.match.params.id).then((response) => {
            if (response.request.status === 200 & response.request.readyState === 4) {
                this.setState({
                    content: response.data
                })
            }
        }).catch((response) => {
            console.log("Errors : " + response)
        })
    }
    
    getContent () {
        if (this.state.content.length) {
            return this.state.content.map((item) => {
                return (
                    <div className="card" key={ item.id }>
                        <div className="card-header">{ item.title }</div>
    
                        <div className="card-body">
                            <p>{ item.body }</p>
                            <p>Created at <strong>{ item.created_at }</strong> by <strong>{ item.name }</strong></p>
                        </div>
                    </div>
                )
            })
        } else {
            return (
                <div className="card">
                    <div className="card-header">Post not found :(</div>

                    <div className="card-body">
                        <p>This post not found !</p>
                    </div>
                </div>
            )
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        { this.getContent() }
                    </div>
                </div>
            </div>
        )
    }

}