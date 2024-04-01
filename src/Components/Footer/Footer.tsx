import React from 'react'
import { Container, FlexChild, FlexLayout, List } from '../../UIComponents'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer' id="footer">
            <Container>
                <FlexLayout valign='center' spacing='extraLoose'>
                    <FlexChild desktopWidth='33' tabWidth='50' mobileWidth='100'>
                        <div className='footer-socials'>
                            <FlexLayout direction='vertical'>
                                <a href='#header'>
                                    <img width='202' src="https://trophyproperty.ng/wp-content/uploads/2024/02/Trophy-Nig-LOGO-1.png" alt="" />
                                </a>
                                <div className='footer-social--follow'>
                                    <p>Follow us on:</p>
                                    <List horizontal gap={10}>
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </List>
                                </div>
                                <div className='footer-social--contacts'>
                                    <p><i className="fa-regular fa-envelope"></i><span>info@trophynig.com</span></p>
                                    <p><i className="fa-solid fa-phone-volume"></i><span>8549652148</span></p>
                                    <p><i className="fa-solid fa-globe"></i><span>2972 Westheimer Rd. Santa Ana, Illinois 85486.</span></p>
                                </div>
                            </FlexLayout>
                        </div>

                    </FlexChild>
                    <FlexChild desktopWidth='33' tabWidth='50' mobileWidth='100'>
                        <div className='footer-company'>
                            <List>
                                <p style={{ fontWeight: 'bold' }}>Company</p>
                                <p><a href="#header">About Us</a></p>
                                <p><a href="#header">Contact Us</a></p>
                                <p><a href="#header">Pricing</a></p>
                                <p><a href="#header">Terms & Conditions</a></p>
                                <p><a href="#header">Report a Problem</a></p>
                                <p><a href="#header">Private Policy</a></p>
                            </List>
                        </div>
                    </FlexChild>
                    <FlexChild desktopWidth='33' tabWidth='50' mobileWidth='100'>
                        <div className='footer-newsletter'>
                            <p>Stay Upto Date</p>
                            <input placeholder='Enter your Email Address' />
                            <button>Subscribe For <span>Newsletter &gt; &gt;</span></button>
                        </div>
                    </FlexChild>
                </FlexLayout>
            </Container>
        </footer>
    )
}

export default Footer