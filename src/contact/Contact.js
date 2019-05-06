import React from 'react'

import "./Contact.css"

export default class Contact extends React.Component{
    render(){
        return(
            <>
            <div className="contact-container" id="contact-container">
                <div className="contact-title-container">
                    <p>CONTACT</p>
                </div>
                <div className="top-left-contact-holder">
                    <div className="contact-title-holder">
                        <p>&ldquo;I currently reside in Helsinki, Finland and welcome all working opportunities to come.&rdquo;</p>
                    </div>

                    <div className='mail-holder'>
                        <div className='mail-img-holder'>

                        </div>
                        <div className='mail-text-holder'>
                            <p>minhchinhduong97@gmail.com</p>
                        </div>
                    </div>

                    <div className='linkedin-holder'>
                        <div className='linkedin-img-holder'>

                        </div>
                        <div className='linkedin-text-holder'>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chinh-duong-28679b157/">/in/chinh-duong-28679b157/</a>
                        </div>
                    </div>

                    <div className='github-holder'>
                        <div className='github-img-holder'>

                        </div>
                        <div className='github-text-holder'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/minhchinh97h">/minhchinh97h</a>
                        </div>
                    </div>

                </div>

                <div className="rights-holder">
                    <p><i className="far fa-copyright"></i> 2019 all rights reserved. Designed and developed by Duong Minh Chinh.</p>
                </div>
            </div>

            

            </>
        )
    }
}