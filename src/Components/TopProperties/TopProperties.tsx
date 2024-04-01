import React from 'react'
import { Card, FlexChild, FlexLayout, Section } from '../../UIComponents'
import flatImage from '../../Assets/flatimage.jpg';
import './TopProperties.css';

const TopProperties = () => {
    return (
        <Section heading='Top Rated Properties'
            para="Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam."
            id="topProperties"
            conatainerMaxWidth={1800}
        >
            <FlexLayout>
                <FlexChild desktopWidth='33' tabWidth='100' mobileWidth='100'>
                    <Card appendClass='top-property-card' padding='0'>
                        <FlexLayout>
                            <FlexChild desktopWidth='33' tabWidth='33' mobileWidth='33'>
                                <div className='top-property--img' style={{backgroundImage: `url(${flatImage})`}}></div>
                            </FlexChild>
                            <FlexChild desktopWidth='66' tabWidth='66' mobileWidth='66'>
                                <div className='top-property--content'>
                                    <FlexLayout direction='vertical'>
                                        <FlexChild>
                                            <h3 className='top-property--title'>Mapkson Gardenia</h3>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p1'>Mapkson Builders</p>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p2'>Greater Kailash, Delhi</p>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p3'>
                                                <span style={{ fontWeight: 'bold' }}>3</span> bed <span style={{ fontWeight: 'bold' }}>2</span> bath
                                            </p>
                                        </FlexChild>
                                        <FlexChild childWidth='fullWidth'>
                                            <p className='top-property--p4'>Managed by JR Developers</p>
                                        </FlexChild>
                                    </FlexLayout>
                                </div>
                            </FlexChild>
                        </FlexLayout>
                    </Card>
                </FlexChild>
                <FlexChild desktopWidth='33' tabWidth='100' mobileWidth='100'>
                    <Card appendClass='top-property-card' padding='0'>
                        <FlexLayout>
                            <FlexChild desktopWidth='33' tabWidth='33' mobileWidth='33'>
                                <div className='top-property--img' style={{backgroundImage: `url(${flatImage})`}}></div>
                            </FlexChild>
                            <FlexChild desktopWidth='66' tabWidth='66' mobileWidth='66'>
                                <div className='top-property--content'>
                                    <FlexLayout direction='vertical'>
                                        <FlexChild>
                                            <h3 className='top-property--title'>Mapkson Gardenia</h3>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p1'>Mapkson Builders</p>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p2'>Greater Kailash, Delhi</p>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p3'>
                                                <span style={{ fontWeight: 'bold' }}>3</span> bed <span style={{ fontWeight: 'bold' }}>2</span> bath
                                            </p>
                                        </FlexChild>
                                        <FlexChild childWidth='fullWidth'>
                                            <p className='top-property--p4'>Managed by JR Developers</p>
                                        </FlexChild>
                                    </FlexLayout>
                                </div>
                            </FlexChild>
                        </FlexLayout>
                    </Card>
                </FlexChild>
                <FlexChild desktopWidth='33' tabWidth='100' mobileWidth='100'>
                    <Card appendClass='top-property-card' padding='0'>
                        <FlexLayout>
                            <FlexChild desktopWidth='33' tabWidth='33' mobileWidth='33'>
                                <div className='top-property--img' style={{backgroundImage: `url(${flatImage})`}}></div>
                            </FlexChild>
                            <FlexChild desktopWidth='66' tabWidth='66' mobileWidth='66'>
                                <div className='top-property--content'>
                                    <FlexLayout direction='vertical'>
                                        <FlexChild>
                                            <h3 className='top-property--title'>Mapkson Gardenia</h3>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p1'>Mapkson Builders</p>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p2'>Greater Kailash, Delhi</p>
                                        </FlexChild>
                                        <FlexChild>
                                            <p className='top-property--p3'>
                                                <span style={{ fontWeight: 'bold' }}>3</span> bed <span style={{ fontWeight: 'bold' }}>2</span> bath
                                            </p>
                                        </FlexChild>
                                        <FlexChild childWidth='fullWidth'>
                                            <p className='top-property--p4'>Managed by JR Developers</p>
                                        </FlexChild>
                                    </FlexLayout>
                                </div>
                            </FlexChild>
                        </FlexLayout>
                    </Card>
                </FlexChild>
            </FlexLayout>
        </Section>
    )
}

export default TopProperties