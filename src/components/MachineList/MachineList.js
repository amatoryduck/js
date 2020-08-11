import React from 'react'
import './MachineList.css'

class MachineList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            machines: []
        }
        this.divs = []
    }

    componentDidMount() {
        console.log(`Machines: ${this.props.temp_machines.length}`)
        this.setState({machines: this.props.temp_machines})
        console.log("THIS MACHINES: " + this.state.machines.length)
    }

    componentDidUpdate() {
        console.log("MACHINES: " + this.state.machines)
        let str = ""
        for (var i = 0; i < this.state.machines.length; i++) {
            str += this.state.machines[i] + "-"
        }

        if (str != "") {
            this.divs = []
            var location = `http://localhost:8000/api/test/multiple/${str}`
            console.log("LOCATION : " + location)
            fetch(location, {
                method: "GET"
            })
            .then(response => response.json())
            .then(result => {
                let tmp_divs = result.map(item => {
                    return (<h1>{item.hostname}</h1>)
                })

                this.divs = tmp_divs
                console.log("THIS DIVS " + this.divs)
            })  
        } else {
            this.divs = []
        }
    }

    render() {
        return (
        <div id="machineList">
            {this.divs.map(item => {
                return (
                    <div>
                        {item}
                    </div>
                )
            })}
        </div>
        )
    }
}

export default MachineList