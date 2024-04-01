import React from 'react'
import { Card, FlexChild, FlexLayout, Section } from '../../UIComponents';
import profilePic from '../../Assets/profilePic.jpg'
import './MeetDevelopers.css'

const MeetDevelopers = () => {
    return (
        <Section heading='Meet our Designer' para='Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.' id="meetdevelopers">
            <div style={{marginTop: '20px'}}>
                <FlexLayout>
                    <FlexChild desktopWidth='25' tabWidth='50' mobileWidth='100'>
                        <Card boxShadow='none' appendClass='developer-card'>
                            <FlexLayout direction='vertical' gap={16}>
                                <FlexChild>
                                    <div className='developer-card--img'>
                                        <img src={profilePic} alt='' />
                                    </div>
                                </FlexChild>
                                <FlexChild>
                                    <h3 className='developer-card--title'>Kathryn Murphy</h3>
                                </FlexChild>
                                <FlexChild>
                                    <p className='developer-card--details'>Designer</p>
                                </FlexChild>
                                <FlexChild>
                                    <FlexLayout gap={20} halign='center'>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-facebook-f"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-instagram"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-linkedin-in"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-twitter"></i></span></FlexChild>
                                    </FlexLayout>
                                </FlexChild>
                            </FlexLayout>
                        </Card>
                    </FlexChild>
                    <FlexChild desktopWidth='25' tabWidth='50' mobileWidth='100'>
                        <Card boxShadow='none' appendClass='developer-card'>
                            <FlexLayout direction='vertical' gap={16}>
                                <FlexChild>
                                    <div className='developer-card--img'>
                                        <img src={profilePic} alt='' />
                                    </div>
                                </FlexChild>
                                <FlexChild>
                                    <h3 className='developer-card--title'>Kathryn Murphy</h3>
                                </FlexChild>
                                <FlexChild>
                                    <p className='developer-card--details'>Designer</p>
                                </FlexChild>
                                <FlexChild>
                                    <FlexLayout gap={20} halign='center'>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-facebook-f"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-instagram"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-linkedin-in"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-twitter"></i></span></FlexChild>
                                    </FlexLayout>
                                </FlexChild>
                            </FlexLayout>
                        </Card>
                    </FlexChild>
                    <FlexChild desktopWidth='25' tabWidth='50' mobileWidth='100'>
                        <Card boxShadow='none' appendClass='developer-card'>
                            <FlexLayout direction='vertical' gap={16}>
                                <FlexChild>
                                    <div className='developer-card--img'>
                                        <img src={profilePic} alt='' />
                                    </div>
                                </FlexChild>
                                <FlexChild>
                                    <h3 className='developer-card--title'>Kathryn Murphy</h3>
                                </FlexChild>
                                <FlexChild>
                                    <p className='developer-card--details'>Designer</p>
                                </FlexChild>
                                <FlexChild>
                                    <FlexLayout gap={20} halign='center'>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-facebook-f"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-instagram"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-linkedin-in"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-twitter"></i></span></FlexChild>
                                    </FlexLayout>
                                </FlexChild>
                            </FlexLayout>
                        </Card>
                    </FlexChild>
                    <FlexChild desktopWidth='25' tabWidth='50' mobileWidth='100'>
                        <Card boxShadow='none' appendClass='developer-card'>
                            <FlexLayout direction='vertical' gap={16}>
                                <FlexChild>
                                    <div className='developer-card--img'>
                                        <img src={profilePic} alt='' />
                                    </div>
                                </FlexChild>
                                <FlexChild>
                                    <h3 className='developer-card--title'>Kathryn Murphy</h3>
                                </FlexChild>
                                <FlexChild>
                                    <p className='developer-card--details'>Designer</p>
                                </FlexChild>
                                <FlexChild>
                                    <FlexLayout gap={20} halign='center'>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-facebook-f"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-instagram"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-linkedin-in"></i></span></FlexChild>
                                        <FlexChild><span className='developer-card--social'><i className="fa-brands fa-twitter"></i></span></FlexChild>
                                    </FlexLayout>
                                </FlexChild>
                            </FlexLayout>
                        </Card>
                    </FlexChild>
                </FlexLayout>
            </div>
        </Section>
    )
}

export default MeetDevelopers