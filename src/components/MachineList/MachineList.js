import React from 'react'
import Machine from '../Machine/Machine'

class MachineList extends React.Component {
    constructor(props) {
        var new_machines_state = []
        super(props)
        this.state = {
            machines: []
        }
        
    }

    componentDidMount() {
        this.new_machines_state = []
        fetch("http://localhost:8000/api/test", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data["data"].length; i++) {
                var m = new Machine({show: false, name: data["data"][i].hostname, running: data["data"][i].running, pDRCALeader: data["data"][i].pDRCALeader, pDRCAIteration: data["data"][i].pDRCAIteration, MDRLevel: data["data"][i].MDRLevel, NeighborState: data["data"][i].NeighborState})
                this.new_machines_state.push(m)
            }

            this.setState({machines: this.new_machines_state})
        })

        this.setState({machines: this.new_machines_state})
    }

    render() {
        return (
        <div id="machineList">
        {
            this.state.machines.map(machine => {
                return (machine.render())
            })
        }
        </div>
        )
    }
}

export default MachineList