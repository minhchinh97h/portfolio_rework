import React from 'react'

import './Header.css'

export default class Header extends React.Component{


    render(){
        return(
            <div className='header-container'>
                <div className='left-links-container'>
                    <div className='link-holder'>
                        <a href="#">Intro</a>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <a href="#">Work</a>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <a href="#">About</a>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <a href="#">Contact</a>

                        <div className='highlight-indicator'></div>
                    </div>
                </div>
            </div>
        )
    }
}