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

    update = () => {
        fetch(`http://localhost:8000/api/test/multiple/${this.state.hostname}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(result => {
            this.setState({hostname: result[0].hostname, running: result[0].running, pDRCAIteration: result[0].pDRCAIteration, pDRCALeader: result[0].pDRCALeader, MDRLevel: result[0].MDRLevel, NeighborState: result[0].NeighborState})
        })

        console.log(this.state)
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            this.update()
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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