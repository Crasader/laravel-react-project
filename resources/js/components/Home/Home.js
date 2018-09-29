import React from "react"

export default class Home extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home Component</div>

                            <div className="card-body">
                                I'm Home component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}