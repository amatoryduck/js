import React from 'react'
import NavBar from '../NavBar/NavBar'
import MachineList from '../MachineList/MachineList'
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebar_names: [],
            machines: [],
            selected_names: [],
            jsx_machines: []
        }
    }

    sidebar_click = (name) => {
        var tmp_names = this.state.selected_names

        if (this.state.selected_names.indexOf(name) < 0) {
            tmp_names.push(name)
        } else {
            var index = tmp_names.indexOf(name)
            tmp_names.splice(index, 1)
        }

        fetch(`http://localhost:8000/api/test/multiple/${name}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(result => {
            let divs = this.state.jsx_machines
            var tmp = []
            var found = false

            for (var i = 0; i < divs.length; i++) {
                if (divs[i].hostname != result[0].hostname) {
                    tmp.push(divs[i])
                } else {
                    found = true
                }
            }

            if (!found) {
                tmp.push(result[0])
            }

            this.setState({jsx_machines: tmp})
        })
    }

    componentWillMount() {
        fetch("http://localhost:8000/api/test/all_names", {
            method: "GET"
        })
        .then(response => response.json())
        .then(result => {
            let divs = result.map((name, i) => {
                return (<a href="#" key = {i} onClick={() => {this.sidebar_click(`${name}`)}}>
                    <div className="companyName">{name}</div>
                    <div className = "line"></div>
                </a>)
            })
            this.setState({sidebar_names: divs})
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div class="bar">
                    {this.state.sidebar_names}
                </div>
                <br></br><br></br>
                <div id="computerData">
                    {
                        this.state.jsx_machines.map(item => {
                            return (
                                <div>
                                    <h1>{item.hostname}</h1>
                                    <h3>{item.running}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home