import React from 'react';
import './App.css';
var parse = require('html-react-parser')

var tmp = ["1", "2", "3", "4"]

class KTable extends React.Component {
    makeTable = () => {
        return (
            parse(
                tmp.reduce((total, item) => {
                    return total += "<tr>" + item + "</tr>"
                }, "")
            )
        )
    }

    drawTable = () =>  {
        return (
            <div>
                <p>test</p>
                <table>
                {
                    this.makeTable()
                }
                </table>
            </div>
            )
    }

    render() {
        return (
            <div>
                {this.makeTable()}
            </div>
        )
    }
}
export default KTable;