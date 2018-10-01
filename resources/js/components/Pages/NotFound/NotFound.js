import React from "react"

export default class NotFound extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">NotFound Component</div>

                            <div className="card-body">
                                404 PAGE NOT FOUND.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}