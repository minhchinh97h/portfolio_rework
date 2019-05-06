import React from 'react'
import './Header.css'

const bodyScrollLock = require('body-scroll-lock')

let mobileHolderNode,
    loadingScreenNode,
    loadingTextNode,
    bodyNode


export default class Header extends React.Component{

    OpenMobileRightTab = () => {
        mobileHolderNode.classList.remove("mrt-visible")
        mobileHolderNode.classList.add("mrt-visible")

        bodyScrollLock.disableBodyScroll(document.getElementById("root"))
    }

    CloseMobileRightTab = () => {
        mobileHolderNode.classList.remove("mrt-visible")
        bodyNode.classList.remove("disable-scrolling")

        bodyScrollLock.enableBodyScroll(document.getElementById("root"))
    }

    LoadLoadingScreen = () => {
        loadingScreenNode.classList.remove("add-animate-loading-screen")
        loadingScreenNode.classList.add("add-animate-loading-screen")
        
        loadingTextNode.classList.remove("add-animate-loading-text")
        loadingTextNode.classList.add("add-animate-loading-text")

        this.RemoveLoadingScreenClassToActiveAgain()
    }

    RemoveLoadingScreenClassToActiveAgain = () => {
        setTimeout(() => {
            loadingScreenNode.classList.remove("add-animate-loading-screen")
            loadingTextNode.classList.remove("add-animate-loading-text")
        }, 3000)
    }

    LoadIntroAnimation = () => {
        document.getElementById("hi-there-holder").classList.remove("hi-there-holder-ani")
        document.getElementById("im-holder").classList.remove("im-holder-ani")
        document.getElementById("duong-minh-chinh-holder").classList.remove("duong-minh-chinh-holder-ani")

        setTimeout(() => {
            document.getElementById("hi-there-holder").classList.add("hi-there-holder-ani")
            document.getElementById("im-holder").classList.add("im-holder-ani")
            document.getElementById("duong-minh-chinh-holder").classList.add("duong-minh-chinh-holder-ani")
        }, 3000)
    }

    SmoothlyScrollTo = (id, e) => {
        let yOffSet = document.getElementById(id).offsetTop

        window.scrollTo(0, yOffSet)

        this.LoadLoadingScreen()

        if(id === "intro-container"){
            this.LoadIntroAnimation()
        }
    }

    MobileSmoothlyScrollTo = (id, e) => {
        this.CloseMobileRightTab()
        this.SmoothlyScrollTo(id)
    }

    componentDidMount(){
        mobileHolderNode = document.getElementById("mobile-right-tab-holder")
        loadingScreenNode = document.getElementById("loading-screen")
        loadingTextNode = document.getElementById("loading-text")
        bodyNode = document.body

        this.LoadLoadingScreen()
        this.LoadIntroAnimation()
    }


    componentDidUpdate(prevProps, prevState){
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
                        <p onClick={this.MobileSmoothlyScrollTo.bind(this, 'intro-container')}>Intro</p>
                    </div>

                    <div className='mobile-link-holder'>
                        <p onClick={this.MobileSmoothlyScrollTo.bind(this, 'about-container')}>About</p>
                    </div>

                    <div className='mobile-link-holder'>
                        <p onClick={this.MobileSmoothlyScrollTo.bind(this, 'work-container')}>Work</p>
                    </div>

                    <div className='mobile-link-holder'>
                        <p onClick={this.MobileSmoothlyScrollTo.bind(this, 'contact-container')}>Contact</p>
                    </div>
                </div>
                
            </div>
            </>
        )
    }
}