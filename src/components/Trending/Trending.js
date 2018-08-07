import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Trending extends Component {

    //This component will hold Trending icon logic.... 
    render() {
        return (
            <div>
                <div>Trending</div>
<Link to='/trends' className='trendingIcons'>
                <div className="trending_img"> icons logic here </div>
</Link>
                <div>/Trending</div>
            </div>
        )
    }
}
