import React from 'react'
import { Card, Container, FlexChild, FlexLayout } from '../../UIComponents'
import img from '../../Assets/jpeg-optimizer_Landing page_page-0001.jpg'
import './DownloadApp.css';


const DownloadApp = () => {
    return (
        <Container>
            <Card appendClass='downloadApp-card' padding='0'>
                <FlexLayout>
                    <FlexChild desktopWidth='66'>
                        <div className='downloadApp-card--content'>
                            <FlexLayout direction='vertical'>
                                <FlexChild >
                                    <h3 className='downloadApp-card--title'>Download Trophy Nig. App</h3>
                                </FlexChild>
                                <FlexChild>
                                    <p className='downloadApp-card--para'>And Never miss out on any update.</p>
                                </FlexChild>
                                <FlexLayout>
                                    <div className='downloadApp-card--point'>
                                        <i className="fa-solid fa-check"></i>
                                        <p>Get to know about newly posted Properties as soon as they are posted</p>
                                    </div>
                                </FlexLayout>
                                <FlexLayout>
                                    <div className='downloadApp-card--point'>
                                        <i className="fa-solid fa-check"></i>
                                        <p>Manage your Properties with ease and instant alerts about Properties</p>
                                    </div>
                                </FlexLayout>
                                <FlexLayout>
                                    <div className='downloadApp-card--apps'>
                                        <a className="btn btn-google" href="#header" title="Google Play">Google Play</a>
                                        <a className="btn btn-apple" href="#header" title="App Store">App Store</a>
                                    </div>
                                </FlexLayout>
                            </FlexLayout>
                        </div>
                    </FlexChild>
                    <FlexChild desktopWidth='33'>
                        <div className='downloadApp-card--img'>
                            <img src={img} alt=""/>
                        </div>
                    </FlexChild>
                </FlexLayout>
            </Card>
        </Container>
    )
}

export default DownloadApp