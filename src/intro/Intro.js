import React from 'react'

import './Intro.css'

export default class Intro extends React.Component{
    componentDidMount(){
    }

    render(){
        return(
            <>
            <div className='intro-container'>
                <div className='hi-there-holder'>
                    <div className='hi-there-img-holder' id="hi-there-img-holder">

                    </div>
                    {/* <img src='/assets/images/HiThere.png' alt="Hithere"></img> */}
                </div>


                <div className='im-holder'>
                    <div className='im-img-holder' id="im-img-holder">

                    </div>
                </div>

                <div className='duong-minh-chinh-holder'>
                    <div className='duong-minh-chinh-img-holder'>

                    </div>
                    {/* <div className='duong-holder'>
                        <div className='duong-img-holder'>

                        </div>
                    </div>
                    
                    <div className='minh-holder'>
                        <div className='minh-img-holder'>
                        
                        </div>
                    </div>

                    <div className='chinh-holder'>
                        <div className='chinh-img-holder'>
                        
                        </div>
                    </div> */}
                </div>
            </div>
            </>
        )
    }
}