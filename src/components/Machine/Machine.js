import React from 'react'

class Machine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/test", {
            method: "GET"
        })
        .then(response => response.json())
        .then(machine_data => { console.log(`Machine Data: ${machine_data.hostname}`); console.log(`Machine running: ${machine_data.running}`)
            this.setState({name: machine_data.hostname, running: machine_data.running, pDRCALeader: machine_data.pDRCALeader, pDRCAIteration: machine_data.pDRCAIteration, MDRLevel: machine_data.MDRLevel, NeighborState: machine_data.NeighborState});
        })

        console.log(`Data found: ${this.state.pid}`)
    }

    render() {
        return (
            <div>
                <h3>Machine: {this.state.name}</h3>
                <ul>
                    <li>
                        Running: {this.state.running}
                    </li>
                    <li>
                        pDRCALeader: {this.state.pDRCALeader}
                    </li>
                    <li>
                        pDRCAIteration: {this.state.pDRCAIteration}
                    </li>
                    <li>
                        MDRLevel: {this.state.MDRLevel}
                    </li>
                    <li>
                        NeighborState: {this.state.NeighborState}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Machine