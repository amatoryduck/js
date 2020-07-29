import React from 'react';
import './App.css';

class Ssh extends React.Component {

    constructor() {
        super();
        this.state = {
            ls: ""
        }
    }

    componentDidMount() {
        fetch('/api/ls')
            .then(res => res.json())
            .then(x => this.setState({ls: x.slice(x.split("\n")[0].length)}, () => {console.log("Fetch succeeded\n")}))
    }

    render() {
        return (
            <div id="ssh_table">
                <table>
                    <tbody>
                        {   
                            (this.state.ls.split("\n").slice(1, this.state.ls.split("\n").length - 2)).map(x => {
                                return <tr>{x.split(",").map(y => {
                                    return <td key={Math.random()}>{y}</td>
                                })}</tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Ssh