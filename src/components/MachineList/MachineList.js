import React from 'react'
import './MachineList.css'

class MachineList extends React.Component {
    constructor(props) {
        super(props)
        this.machine_jsx = []
        this.state = {
            machines: []
        }
    }

    componentDidMount() {
        console.log(`Machines: ${this.props.temp_machines.length}`)
        this.setState({machines: this.props.temp_machines})
    }

    componentDidUpdate() {
        this.machine_jsx = []
        for (var i = 0; i < this.state.machines.length; i++) {
            fetch(`http://localhost:8000/api/test/${this.state.machines[i]}`)
            .then(response => response.json())
            .then(result => {
                this.machine_jsx.push(result["hostname"])
            })
        }
    }

    render() {
        return (
        <div id="machineList">
            {this.machine_jsx.map(item => {
                return (
                        <h1>{item}</h1>
                )
            })}
        </div>
        )
    }
}

export default MachineList