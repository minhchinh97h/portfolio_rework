import React from 'react'
import './About.css'
import { tsConstructorType } from '@babel/types';

export default class About extends React.Component{
    render(){
        return(
            <div className='about-container' id="about-container">
                <div className='about-title-container'>
                    <p>ABOUT</p>
                </div>

                <div className='content-holder'>
                    <div className='text-holder'>
                        <span>
                            <p>&ldquo;Curious, Ambitious and Devoted are three words that precisely describe my attitude towards coding. 
                            I have 1+ year professional experience in web development, with specialization of React, Javascript, HTML 5, CSS and NoSQL database such as MongoDB, Firebase. 
                            When facing any challenges, I urge myself to solve the issues at once. I am only pleased when everything is done and perfect.&rdquo;</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}