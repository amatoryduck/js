import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ul id="NavBar_ul">
                    <li id="NavBar_li"><a href="default.asp">OSPF</a></li>
                    <li id="NavBar_li"><a href="news.asp">PDRCA</a></li>
                    <li id="NavBar_li"><a href="contact.asp">Keith</a></li>
                </ul>
            </div>
        )
    }

}

export default NavBar