import React from 'react'
import NavBar from '../NavBar/NavBar'
import MachineList from '../MachineList/MachineList'
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebar_names: []
        }
    }

    componentWillMount() {
        fetch("http://localhost:8000/api/test/all_names", {
            method: "GET"
        })
        .then(response => response.json())
        .then(result => {
            let divs = result.map((name, i) => {
                return (<a href="#" key = {i}>
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
                <MachineList/>
            </div>
        )
    }
}

export default Home