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
            selected_names: []
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

        this.setState({selected_names: tmp_names})
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
                <MachineList temp_machines={this.state.selected_names}/>
            </div>
        )
    }
}

export default Home