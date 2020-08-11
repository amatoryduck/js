import React from 'react'
import './Machine.css'

class Machine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            hostname: "",
            running: true,
            pDRCALeader: true,
            pDRCAIteration: 0,
            MDRLevel: "",
            NeighborState: ""
        }
    }

    render() {
        return (
            <div id="singleMachine">
                <h1>Name: {this.props.hostname}</h1>
                <h3>Running: {this.props.running}</h3>
                <h3>pDRCALeader: {this.props.pDRCALeader}</h3>
                <h3>pDRCAIteration: {this.props.pDRCAIteration}</h3>
                <h3>MDRLevel:</h3>
                <ul>
                    {
                        this.props.MDRLevel.map(item => {
                            return (<li>{item}</li>)
                        })
                    }
                </ul>
                <h3>NeighborState:</h3>
                <ul>
                    {
                        this.props.NeighborState.map(item => {
                            return (<li>{item}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Machine