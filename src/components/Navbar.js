import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    render () {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/" ></Navitem>
            <Navitem item="Test1" tolink="/" ></Navitem>
            <Navitem item="Test2" tolink="/"></Navitem>
            <Navitem item="Test3" tolink="/"></Navitem>
            <Navitem item="Test4" tolink="/"></Navitem>
            </ul>
            </nav>
        )
    }
}

export default Navbar