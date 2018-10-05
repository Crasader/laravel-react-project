import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default class Home extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            contents: []
        };
    }

    componentDidMount () {
        axios.get('http://localhost:8000/api/posts').then((response) => {
            if (response.request.status === 200 & response.request.readyState === 4) {
                this.setState({
                    contents: response.data
                })
                console.log(response.data)
            }
        }).catch((error) => {
            console.log("Error : " + error)
        })
    }

    getContents () {
        return this.state.contents.map((item) => {
            return (
                <div className="content" key={item.id}>
                    <h3><Link to={"/post/" + item.id }>{ item.title }</Link></h3>
                    <h6>Upload by <strong>{ item.name }</strong></h6>
                    <p>{ item.body }</p>
                </div>
            )
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home Component</div>

                            <div className="card-body">
                                { /*I'm Home component!*/ }
                                { this.getContents() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}