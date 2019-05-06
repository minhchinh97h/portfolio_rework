import React from 'react'
import './Header.css'
import {animateScroll} from 'react-scroll'

let mobileHolderNode,
    loadingScreenNode,
    loadingTextNode,
    bodyNode

export default class Header extends React.Component{

    OpenMobileRightTab = () => {
        mobileHolderNode.classList.remove("mrt-visible")
        mobileHolderNode.classList.add("mrt-visible")

        bodyNode.classList.remove("disable-scrolling")
        bodyNode.classList.add("disable-scrolling")
    }

    CloseMobileRightTab = () => {
        mobileHolderNode.classList.remove("mrt-visible")
        bodyNode.classList.remove("disable-scrolling")
    }

    SmoothlyScrollTo = (id, e) => {
        let yOffSet = document.getElementById(id).offsetTop

        window.scrollTo(0, yOffSet)

        loadingScreenNode.classList.remove("add-animate-loading-screen")
        loadingScreenNode.classList.add("add-animate-loading-screen")
        
        loadingTextNode.classList.remove("add-animate-loading-text")
        loadingTextNode.classList.add("add-animate-loading-text")

        setTimeout(() => {
            loadingScreenNode.classList.remove("add-animate-loading-screen")
            loadingTextNode.classList.remove("add-animate-loading-text")
        }, 3000)


        
    }

    componentDidMount(){
        mobileHolderNode = document.getElementById("mobile-right-tab-holder")
        loadingScreenNode = document.getElementById("loading-screen")
        loadingTextNode = document.getElementById("loading-text")
        bodyNode = document.body
    }

    render(){
        return(
            <>
            <div className='loading-screen' id="loading-screen">
                <p id="loading-text">LOADING ...</p>
            </div>
            <div className='header-container'>
                <div className='right-links-container'>
                    <div className='link-holder'>
                        <p onClick={this.SmoothlyScrollTo.bind(this, 'intro-container')}>Intro</p>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <p  onClick={this.SmoothlyScrollTo.bind(this, 'about-container')}>About</p>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <p onClick={this.SmoothlyScrollTo.bind(this, 'work-container')}>Work</p>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <p onClick={this.SmoothlyScrollTo.bind(this, 'contact-container')}>Contact</p>

                        <div className='highlight-indicator'></div>
                    </div>
                </div>

                <div className='mobile-hamburger-bars-holder' id='mobile-hamburger-bars-holder' >
                    <i className="fas fa-bars fa-2x" id="hamburger-button" onClick={this.OpenMobileRightTab}></i>
                </div>
            </div>

            <div className='mobile-right-tab-holder' id="mobile-right-tab-holder">
                <div className='underlying-mobile-top-links' onClick={this.CloseMobileRightTab}>

                </div>
                <div className='mobile-top-links-container'>
                    <div className='mobile-link-holder'>
                        <a href="#">Intro</a>
                    </div>

                    <div className='mobile-link-holder'>
                        <a href="#">Intro</a>
                    </div>

                    <div className='mobile-link-holder'>
                        <a href="#">Intro</a>
                    </div>

                    <div className='mobile-link-holder'>
                        <a href="#">Intro</a>
                    </div>
                </div>
                
            </div>
            </>
        )
    }
}