import React from 'react'

import './Intro.css'

export default class Intro extends React.Component{
    componentDidMount(){
    }

    render(){
        return(
            <>
            <div className='intro-container' id="intro-container">
                <div className='hi-there-holder hi-there-holder-ani' id="hi-there-holder">
                    <div className='hi-there-img-holder' id="hi-there-img-holder">

                    </div>
                </div>


                <div className='im-holder im-holder-ani' id="im-holder">
                    <div className='im-img-holder' id="im-img-holder">

                    </div>
                </div>

                <div className='duong-minh-chinh-holder duong-minh-chinh-holder-ani' id="duong-minh-chinh-holder">
                    <div className='duong-minh-chinh-img-holder'>

                    </div>
                </div>
            </div>
            </>
        )
    }
}