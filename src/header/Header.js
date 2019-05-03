import React from 'react'

import './Header.css'

let mobileHolderNode

export default class Header extends React.Component{

    OpenMobileRightTab = () => {
        mobileHolderNode.classList.remove("mrt-visible")
        mobileHolderNode.classList.add("mrt-visible")
    }

    CloseMobileRightTab = () => {
        mobileHolderNode.classList.remove("mrt-visible")
    }

    IsDescendantOrIden = (parent, child) => {
        if(parent === child)
            return true

        var node = child.parentNode

        while(node !== null){
            if(node === parent){
            return true
            }
            node = node.parentNode
        }

        return false
    }

    componentDidMount(){
        mobileHolderNode = document.getElementById("mobile-right-tab-holder")

        document.addEventListener("click", (e) => {
            if(!this.IsDescendantOrIden(mobileHolderNode, e.target) && e.target.id !== "hamburger-button"){
                this.CloseMobileRightTab()
            }
        })
    }

    render(){
        return(
            <>
            <div className='header-container'>
                <div className='right-links-container'>
                    <div className='link-holder'>
                        <a href="#">Intro</a>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <a href="#">About</a>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <a href="#">Work</a>

                        <div className='highlight-indicator'></div>
                    </div>

                    <div className='link-holder'>
                        <a href="#">Contact</a>

                        <div className='highlight-indicator'></div>
                    </div>
                </div>

                <div className='mobile-hamburger-bars-holder' id='mobile-hamburger-bars-holder' >
                    <i className="fas fa-bars fa-2x" id="hamburger-button" onClick={this.OpenMobileRightTab}></i>
                </div>
            </div>

            <div className='mobile-right-tab-holder' id="mobile-right-tab-holder">
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