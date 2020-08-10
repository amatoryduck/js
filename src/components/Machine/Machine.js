import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

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

    componentWillMount() {
        fetch("http://localhost:8000/api/test", {
            method: "GET"
        })
        .then(response => response.json())
        .then(machine_data => { console.log(`Machine Data: ${machine_data.hostname}`); console.log(`Machine running: ${machine_data.running}`)
            this.setState({name: machine_data.hostname, running: machine_data.running, pDRCALeader: machine_data.pDRCALeader, pDRCAIteration: machine_data.pDRCAIteration, MDRLevel: machine_data.MDRLevel, NeighborState: machine_data.NeighborState});
        })

        console.log(`Data found: ${this.state.pid}`)
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

    should_show() {
        /*if (this.state.show) {*/
            return (
                <div>
                    <h3>Machine: {this.props.name}</h3>
                    <ul>
                        <li>
                            Running: {this.props.running}
                        </li>
                        <li>
                            pDRCALeader: {this.props.pDRCALeader}
                        </li>
                        <li>
                            pDRCAIteration: {this.props.pDRCAIteration}
                        </li>
                        <li>
                            MDRLevel: {this.props.MDRLevel}
                        </li>
                        <li>
                            NeighborState: {this.props.NeighborState}
                        </li>
                    </ul>
                </div>
            )
        /*} else {
            return (<div></div>)
        }*/
    }

    render() {
        return (
            <div>
                <DropdownButton id="dropdown-basic-button" title={this.props.name}>
                    <Dropdown.Item onClick={() => {
                        this.setState({show: !this.state.show})
                    }}>Show</Dropdown.Item>
                </DropdownButton>
                {this.should_show()}
                <br></br>
            </div>
        )
    }
}

export default Machine