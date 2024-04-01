import React from 'react'
import { Button, Card, FlexChild, FlexLayout, Section } from '../../UIComponents'
import Slider, { Settings } from 'react-slick';

import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

import './FeaturedProperties.css';


const FeaturedProperties = () => {
    const data = [
        {
            id: 10,
            image: img1,
            title: 'Mini Flat 1 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 21,
            image: img2,
            title: 'Mini Flat 2 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 32,
            image: img3,
            title: 'Mini Flat 3 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 43,
            image: img4,
            title: 'Mini Flat 4 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 54,
            image: img5,
            title: 'Mini Flat 5 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 65,
            image: img6,
            title: 'Mini Flat 6 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 76,
            image: img7,
            title: 'Mini Flat 7 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 87,
            image: img8,
            title: 'Mini Flat 8 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        },
        {
            id: 98,
            image: img9,
            title: 'Mini Flat 9 in Lekki Phase',
            desc: 'N 2,500,000/sq ft',
            details: <React.Fragment><span style={{ fontWeight: 'bold' }}>3</span> Bed <span style={{ fontWeight: 'bold' }}>2</span> bath</React.Fragment>,
            developer: 'Managed by JR Developers'
        }
    ]

    const settings: Settings = {
        // autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Section heading='Featured Properties' para='Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan arcu erat donec massa pulvinar.
        Rutrum pharetra id risus interdum. Donec proin quis mauris neque.' id='properties-card'>
            <Slider {...settings}>
                {data.map((elem, index) => {
                    return <div key={elem.id}>
                        <Card key={elem.id} appendClass='property-card'>
                            <FlexLayout direction='vertical' gap={20}>
                                <FlexChild >
                                    <div className='property-card--img' style={{ backgroundImage: `url(${elem.image})` }}>
                                        <FlexLayout wrap='noWrap'>
                                            <FlexChild childWidth='fullWidth'>
                                                <Button thickness='extraThin'>FOR SALE</Button>
                                            </FlexChild>
                                            <FlexChild>
                                                <FlexLayout direction='vertical' gap={20}>
                                                    <FlexChild><span className='property-card--icon'><i className="fa-solid fa-heart"></i></span></FlexChild>
                                                    <FlexChild><span className='property-card--icon'><i className="fa-solid fa-file-circle-plus"></i></span></FlexChild>
                                                    <FlexChild><span className='property-card--icon'><i className="fa-solid fa-maximize"></i></span></FlexChild>
                                                </FlexLayout>
                                            </FlexChild>

                                        </FlexLayout>
                                    </div>
                                </FlexChild>
                                <FlexChild>
                                    <p className='property-card--title'>{elem.title}</p>
                                </FlexChild>
                                <FlexChild>
                                    <h3 className='property-card--desc'>{elem.desc}</h3>
                                </FlexChild>
                                <FlexChild>
                                    <p className='property-card--details'>{elem.details}</p>
                                </FlexChild>
                                <FlexChild>
                                    <p className='property-card--developer'>{elem.developer}</p>
                                </FlexChild>
                            </FlexLayout>
                        </Card>
                    </div>
                })}
            </Slider>
        </Section>
    )
}

export default FeaturedProperties