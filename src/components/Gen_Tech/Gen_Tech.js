import React, { Component } from 'react'
import News_Tweet from '../News_Tweet/News_Tweet';
import Trending from '../Trending/Trending';
import Navbar from '../Navbar/Navbar';
//import {Link} from 'react-router-dom';


export default class Gen_Tech extends Component {

    //Rendering 3 components News_Tweet will repeat down the page.
    render() {
        return (
            <div>
                <div><Navbar/></div>
                <div><Trending/></div>
                <div><News_Tweet/></div>
            </div>
        )
    }
}
