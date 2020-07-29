import React from 'react';
import './App.css';
var parse = require('html-react-parser')

class Ssh extends React.Component {

    getString = (data) => {
        console.log("DATA: " + data)
        var lst = data.split("\n").slice(1, data.split("\n").length - 1)
        const test = "<table><tbody>" + lst.map(x => { return `<tr>${x.split(",").reduce((total, item) => { return total += `<td>${item}</td>`}, "")}</tr>`}) + "</tbody></table>"
        return parse(test)
    }

    constructor() {
        super();
        this.state = {
            ls: "",
            jsx: null
        }
    }

    componentDidMount() {
        fetch('/api/ls')
            .then(res => res.json())
            .then(x => this.setState({ls: x.slice(x.split("\n")[0].length), jsx: this.getString(x.slice(x.split("\n")[0].length))}, () => console.log("Fetch succeeded\n")))
    }

    render() {
        console.log("JSX: " + this.state.jsx)
        return (
            <div id="ssh_table">
                {   
                    this.state.jsx
                }
            </div>
        )
    }
}

export default Ssh