import React from 'react'
import { Button, Container, FlexChild, FlexLayout } from '../../UIComponents'
import './Hero.css';
const Hero = () => {
    return (
        <section className="hero" id="hero">
            <Container>
                <div className='hero-container'>
                    <FlexLayout direction='vertical' gap={32}>
                        <FlexChild>
                            <p className='hero-subtext'>
                                We are offering the
                            </p>
                        </FlexChild>
                        <FlexChild>
                            <h1 className='hero-title'>
                                Best Real Estate Deals
                            </h1>
                        </FlexChild>
                        <FlexChild>
                            <p className='hero-para'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                                nostrud amet.
                            </p>
                        </FlexChild>
                        <FlexChild>
                            <Button>More Details</Button>
                        </FlexChild>
                    </FlexLayout>
                </div>
            </Container>
        </section>
    )
}

export default Hero